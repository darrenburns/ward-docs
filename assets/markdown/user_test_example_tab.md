---
type: "example-tab"
fakeTabName: "test_users.py"
description: "2. Import it and bind it as a default argument. Ward will inject the resolved fixture into your test."
---
```python
from user_fixtures import user

@test("get_user returns the correct user")
def _(expected=user):
    found = get_user(id=expected.id)
    assert found == expected
```
