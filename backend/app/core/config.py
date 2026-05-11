from pydantic_settings import BaseSettings
from pydantic import Field


class Settings(BaseSettings):
    DATABASE_URL: str = Field(default="postgresql+asyncpg://admin:zarvo123@localhost:5432/zarvo")
    APP_NAME: str = Field(default="Zarvo API")
    DEBUG: bool = Field(default=True)
    FRONTEND_URL: str = Field(default="http://localhost:3000")

    class Config:
        env_file = ".env"


settings = Settings()
