---
type: "example-tab"
fakeTabName: "user_fixtures.py"
description: "1. Define test data anywhere, and tell Ward how long to cache it for."
---
```python
# Will run at most 1x per module
@fixture(scope=Scope.Module)
def user():
    my_user = create_user(id=1)
    return my_user
```