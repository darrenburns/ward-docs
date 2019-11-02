---
type: "example"
description: "Define modular test dependencies and retrieve them using Python's import machinery, not name-matching."
---

```python
@fixture(scope=Scope.Global)
def user():
    return User(id=1)

@test("get_user(id=1) returns user 1")
def _(u=user):
    expect(get_user(id=1)).equals(u)
```