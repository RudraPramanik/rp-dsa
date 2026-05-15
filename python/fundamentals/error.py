try:
    result = risky()
except (ValueError, TypeError) as e:
    print(f"type error: {e}")
except Exception as e:
    log(e)
    raise            # re-raise
else:                # runs if no exception
    use(result)
finally:             # always runs
    cleanup()

# Custom exceptions
class AppError(Exception):
    def __init__(self, msg: str, code: int):
        super().__init__(msg)
        self.code = code

# Exception chaining
try:
    load()
except OSError as e:
    raise AppError("load failed", 500) from e