---
type: "example-tab"
fakeTabName: "test_simple.py"
section: "example"
---
```python
@test("the eggs are green")
async def _():
    eggs = await get_food("eggs")
    assert eggs.colour == "green"
```