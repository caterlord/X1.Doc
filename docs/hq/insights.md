---
title: Insights
---

:::info[Who this is for]
Owners, managers, and analysts reviewing business performance or comparing menu items.
:::

## Before you start

- Select the correct workspace and brand.
- Choose the shops and period to compare. All views share these filters.
- Allow for incomplete sales when the period includes today.

## Open this page

Open `Insights` from the Analytics area.

## What this page is for

Start with a business overview, then explore the question that needs attention. This page only reads sales data; it does not change prices, menus, or transactions.

Screenshot pending: `insights_workspace_overview.png` — the overview with its five analysis views.

## Main views

| View | Use it to |
| --- | --- |
| `Overview` | Review the sales trend, leading item, strongest sales day, and voided or returned transactions. Follow the summary buttons for detail. |
| `Items` | Explore item history and compare up to four items across the same dates and shops. |
| `Sales patterns` | Explore the full sales trend, busy hours, and sales calendar. |
| `Menu mix` | Review menu performance, revenue and category mix, gainers and losers, and items ordered together. |
| `Transactions` | Explore check sizes, individual transactions, and sales flows. |

## Compare items

1. Select `Today`, `7D`, `14D`, `1M`, or `3M`.
2. Select the required shops.
3. Select `Apply` to refresh the data.
4. Open `Items`.
5. Search in `Selected items` and select up to four items. You can also open an item or select `Add` in `All items in this period`.
6. Open `Over time`.
7. Turn on `Compare with previous period` for previous-period revenue and percentage changes. A zero or negative baseline has no percentage comparison.
8. Choose `Item revenue`, `Units sold`, `Orders containing item`, or `Average selling price` above `Performance history`.
9. Turn on `Compare trends · daily average = 100` to compare the shape of different-sized items. A value of 200 means twice that item's own daily average; it does not mean twice another item's sales.
10. Review `Daily history` for exact values, or select `Inspect order lines` to inspect the source lines, including exceptions.

Screenshot pending: `insights_item_comparison.png` — two selected items, their daily history chart, and comparison cards.

When one item is selected, `Performance by shop` shows its revenue and quantity in each shop. Items without eligible sales in the chosen period do not appear in the item list. An explicitly selected item with no sales remains identified so you can change the filters or remove it.

## Plan preparation by time of day

1. Select the shop and a period that represents the service you are planning, then select `Apply`.
2. Open `Items` and select the item, such as Roasted Goose. Select additional items to compare their hourly patterns.
3. Open `Time of day`.
4. Turn on `Compare with previous period` if you want to compare the same items with the preceding period of equal length. The displayed date ranges identify both periods.
5. Choose `All dates in period` in `Business date`, or choose one date to see its actual hourly totals.
6. Choose `Weekdays`, `Weekends`, or an individual weekday in `Days to include`. This filter is available when all dates are selected.
7. Select `Units sold` to plan quantities, or select revenue or orders to answer a different question.
8. Review the peak hour and `Hourly breakdown` for quantities, matching-day counts, and each hour's share of units and revenue.

The multi-day chart shows average activity per matching business date, including dates with no sales or when the shop was closed. For example, 70 units at noon across seven matching dates means 10 units per day at noon. Multiple shops are combined, so select one shop when planning that shop's preparation. Previous-period averages use that period's own matching-day count. A specific date compares with the same position in the previous period.

Open `Weekday × hour` to see how the pattern differs by weekday. When several items are selected, choose `Item shown in heatmap`. Current and previous heatmaps use the same colour scale. Each cell averages only its weekday's matching dates; a dash means no matching dates or no usable order times. The table provides the exact values.

Hours use the local order time recorded by POS, rather than checkout time or your browser's timezone. Weekdays follow the business date, so orders after midnight stay with their business day. Lines with missing or unsupported order times are excluded and counted in a warning. The hourly views include completed sales only, so today's in-progress orders may be absent. Allow for incomplete days, closed days, and stockouts before changing preparation quantities: low sales can also mean an item sold out.

Screenshot pending: `insights_item_hourly.png` — item comparison by order hour with weekday filters and day counts.
Screenshot pending: `insights_item_weekday_heatmap.png` — one item's current and previous weekday-by-hour heatmaps on the same scale.

## Compare an item across shops

1. Select the required shops in the page filter, or leave it at all shops.
2. Select `Apply` to refresh the page for those shops.
3. Open `Items` and select the item or items you want to investigate.
4. Open `Shop comparison`.
5. Choose one `Item to compare` from the selected items.
6. Choose `Over time` or `Time of day` in `Comparison view`.
7. Choose up to four locations in `Shops to compare`. These choices stay within the page's shop filter. The first available shops are selected initially; check that they are the locations you intend to compare.
8. Review the separate shop lines and the exact-value table.

`Over time` shows daily quantities, revenue, orders, or average selling price. `Shop totals` lists each shop's totals for the displayed date range, including any active focus. Turn on `Compare trends · daily average = 100` to compare the pattern relative to each shop's own average. Turn on `Compare with previous period` to add prior revenue and revenue changes to the shop totals.

`Time of day` uses one line per shop. Choose weekdays, weekends, an individual weekday, or a single date using the same time filters described above. Previous-period comparison adds a prior hourly line for each shop. For multiple dates, each shop’s hourly values use the matching calendar-day count, including its no-sale dates. The hourly shares are calculated within each shop, not as shares across locations.

Locations with no eligible sales remain visible with zero totals; this does not prove that the item was unavailable. If only one shop is available, broaden the page's shop filter. Dates and measures are shared, but opening hours, closures, shop size, and stockouts are not adjusted for.

Screenshot pending: `insights_item_shop_comparison.png` — the same item compared across two shops, with shop selectors, separate trend lines, and shop totals.

## Understand the figures

Item analysis includes completed sales and excludes voided tickets, voided lines, returns, and modifiers. `Item revenue` uses line amounts before ticket-level discounts, taxes, and charges. It is not profit and may differ from final receipt totals. `Orders containing item` counts an order once even if it contains several lines for the item. `Average selling price` is item revenue divided by units sold. In hourly views, an order may appear in several hours when more items are added later, so hourly order counts should not be added to find distinct orders for the whole period.

History groups sales by business date. Days without sales show zero; average price is blank when there are no units. The same item stays together when its name changes. The most recent name in the selected period is shown.

In `Sales patterns`, drag across the sales trend or select a daily row to focus analysis on a smaller range. The focus remains visible when you switch views. Select `Clear focus` to return to the full period.

## What changes after you save

There is no save action. Filters and selections change the analysis only. Switching views keeps the current date and shop filters.

## How to check your result

1. Confirm the period, shops, selected items, and any active focus.
2. Check whether the chart shows actual values or the daily-average index.
3. Review the calculation note and any incomplete-data warning before using totals.
4. Open [Sales Reports](./reports/sales-reports.md) when you need an export or formal reconciliation.

## If something goes wrong

- No sales: try another period or shop.
- Incomplete data: shorten the period or select fewer shops. Totals and rankings are partial until the warning disappears.
- Previous-period error: select `Retry`. Current-period figures remain available.
- Updated report data required: ask your administrator to check the reporting service version.

## When to ask owner/admin

Ask before acting on findings that affect pricing, staffing, or loss prevention. Ask for help when the figures cannot be reconciled after matching the dates, shops, and calculation method.
