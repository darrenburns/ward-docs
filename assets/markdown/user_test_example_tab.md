---
type: "example-tab"
fakeTabName: "test_users.py"
description: "2. Import it and bind it as a default argument. Ward will resolve the value and inject it into your test."
---
```python
from user_fixtures import user

@test("get_user(id=1) returns user 1")
def _(u=user):
    expect(get_user(id=1)).equals(u)
```