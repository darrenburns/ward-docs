---
type: "example-tab"
fakeTabName: "user_fixtures.py"
description: "1. Define a unit of test data anywhere, and tell Ward how long to cache it for."
section: "example"
---
```python
# Will run at most 1x per module
@fixture(scope=Scope.Module)
def user():
    u = User(id=1, name="sam")
    return u
```