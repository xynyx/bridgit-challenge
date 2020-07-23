# Matt's Notes

## Assumptions

- Given the fact that you supplied redux and material UI pre-installed, I felt like incorporating these was required

## Limitations

- The table doesn't really handle cases where they may be hundreds of items on the list --> would be easy to add pagination but currently it doesn't have it
- No way to add additional categories
- No way to edit items without deleting and re-adding

## Extra features

- Can filter multiple categories at once

## Feedback

- I found it enjoyable because at its core it was simple, but it gave me the chance to incorporate Redux
- Have never really used Redux hands-on before so this was a great learning experience!

## Challenges

- Understanding Redux and getting it to work properly
- Filtering state

  - You can't just take the state, filter the results, and add it back to the state
  - This causes issues as the filtered list will be the new state, meaning if you remove the filters, the list state is now permanently modified and you can't display the previous unfiltered values
  - SOLUTION

    - In ItemTable.jsx

    ```js
    // Filter items based on category filters
    // If no filters and this is called, just return all the items
    const itemsAfterFilter = () => {
      if (filters.length === 0) return items;

      return items.filter(item => filters.includes(item.category));
    };

    // Watch for changes in items and filters and update list accordingly
    const data = useMemo(() => {
      return itemsAfterFilter();
    }, [items, filters]);
    ```

    - If filters are given, the items are filtered with itemsAfterFilter and then the data is set based on the filtered data
    - If no filters are given, the itemsAfterFilter function returns the entirity of the items

## Thanks!
- Looking forward to the next steps :)