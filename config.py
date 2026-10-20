from functools import lru_cache
from typing import Literal

from pydantic import Field, model_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    app_name: str = "Shoprite Angola"
    app_env: Literal["development", "staging", "production"] = "development"
    debug: bool = False
    host: str = "127.0.0.1"
    port: int = 8000

    secret_key: str = ""
    allowed_hosts: str = "localhost,127.0.0.1"
    cors_origins: str = ""

    rate_limit_enabled: bool = True
    rate_limit_requests: int = Field(default=120, ge=1)
    rate_limit_window_seconds: int = Field(default=60, ge=1)

    log_level: str = "INFO"

    database_url: str = "postgresql+asyncpg://postgres:admin123@localhost:5432/shoprite"

    flyer_retention_days: int = Field(default=30, ge=0, le=3650)
    flyer_max_size_mb: int = Field(default=10, ge=1, le=100)
    flyer_thumbnail_width: int = Field(default=600, ge=200, le=2000)

    # ── Admin ──
    admin_allowed_ips: str = "127.0.0.1,::1"
    admin_session_hours: int = 12
    admin_cookie_name: str = "sr_admin_session"
    admin_cookie_secure: bool = False
    admin_login_max_attempts: int = 5
    admin_lockout_minutes: int = 15

    @property
    def admin_allowed_ips_list(self) -> list[str]:
        raw = (self.admin_allowed_ips or "").strip()
        if not raw or raw.lower() in ("none", "off", "disabled", "*"):
            return []
        return [ip.strip() for ip in raw.split(",") if ip.strip()]

    @property
    def is_prod(self) -> bool:
        return self.app_env == "production"

    @property
    def allowed_hosts_list(self) -> list[str]:
        return [h.strip() for h in self.allowed_hosts.split(",") if h.strip()]

    @property
    def cors_origins_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",") if o.strip()]

    @property
    def flyer_max_size_bytes(self) -> int:
        return self.flyer_max_size_mb * 1024 * 1024

    @model_validator(mode="after")
    def _validate_security(self) -> "Settings":
        if self.is_prod:
            if len(self.secret_key) < 32:
                raise ValueError("SECRET_KEY tem de ter ≥ 32 chars em produção.")
            if "localhost" in self.allowed_hosts_list:
                raise ValueError("ALLOWED_HOSTS não pode ter 'localhost' em produção.")
            if "*" in self.allowed_hosts_list:
                raise ValueError("ALLOWED_HOSTS não pode ter '*'.")
            if self.database_url.startswith("sqlite"):
                raise ValueError("Em produção usa PostgreSQL (não SQLite).")
            if self.is_prod and not self.admin_cookie_secure:
                raise ValueError("ADMIN_COOKIE_SECURE tem de ser true em produção (HTTPS).")
            object.__setattr__(self, "admin_cookie_secure", True)
        return self


@lru_cache
def get_settings() -> Settings:
    return Settings()
