# Refactor Changes

## Variable Renames

| Old Name | New Name | Why |
|---|---|---|
| x | nextId | stores next confession id |
| d | requestData | stores req.body data |
| r | routeParams | stores req.params |
| t | actionType | tells which operation to run |
| tmp | newConfession | created confession object |
| arr | sortedConfessions | sorted confession list |
| i | confessionId | parsed numeric id |
| cat | categoryName | selected category |
| cats | allowedCategories | valid category list |
| stuff | filteredConfessions | category filtered list |
| handler | confessionIndex | index of item to delete |
| res2 | deletedConfession | removed item result |
| fn | confession | readable callback variable |
| startStr | startupMessage | console startup text |

## Function Splits

(To be added in next step)