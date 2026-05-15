# Built-in with
with open("file.txt") as f:
    data = f.read()

# Multiple at once
with open("a") as a, open("b") as b:
    ...

# Class-based __enter__ / __exit__
class Timer:
    def __enter__(self):
        self.start = time()
        return self
    def __exit__(self, *_):
        self.elapsed = time() - self.start

# @contextmanager — generator style
from contextlib import contextmanager

@contextmanager
def managed_resource():
    res = acquire()
    try:
        yield res      # runs with block
    finally:
        res.release()