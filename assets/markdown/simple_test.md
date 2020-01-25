---
type: "example-tab"
fakeTabName: "test_simple.py"
section: "example"
---
```python
def greeting(name):
    return f"Hello, {name}!"

@test("greeting({name}) returns 'Hello, {name}!'")
def _(name="Sam"):
    assert greeting(name) == f"Hello, {name}!"

```