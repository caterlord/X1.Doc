---
title: My Subscriptions
---

:::info[Who this is for]
Admins who review X1 POS device seats or manage active marketplace subscriptions for the selected brand.
:::

## Before you start

- Confirm the correct workspace and brand in the top-left selector.
- Use an admin account with access to that brand to pair or release a device.
- Before pairing, connect the replacement or new tablet to the internet and open X1 POS setup.
- Release a POS device seat only when the current tablet is damaged, lost, or permanently replaced.
- Make sure the replacement tablet is ready to register after you release the old device.
- Make sure you understand whether removing a marketplace subscription will affect live shops or integrations.
- If a POS shop profile was deleted from a terminal, check this page to confirm the related seat is available again.

## Open this page

In the sidebar, open `Marketplace & Billing` → `My Subscriptions`.

- Select `X1 Product` to review seats, pair a tablet, or release a device.
- Select `Marketplace` to review and manage marketplace product subscriptions.

## What this page controls

`My Subscriptions` controls two different subscription areas.

### X1 POS device seats

Use `X1 Product` to review the POS subscription seats for the selected brand.

The `X1 POS device seats` table shows:

| Field | What it means |
| --- | --- |
| `Shop` | The shop assigned to the seat. |
| `Status` | `Occupied` means a device is using the seat. `Pairing` means a setup session is in progress. `Available` means a tablet can register for that shop. |
| `Device` | The POS device name when available. If the device name is not available, HQ shows a shortened device ID and `Device name unavailable`. |
| `Activated` | When the device took the seat. |
| `Last Online` | The last time that POS device checked its subscription. |
| `Subscription Period` | The seat period if a start or end date is set. |
| `Actions` | Use `Pair device` on an available seat or `Release device` on an occupied seat. A seat in HQ pairing can show `Regenerate code` and a `Cancel pairing` icon. |

The summary above the table shows `Total Seats`, `Used Seats`, `Pairing`, and `Available Seats`.

![X1 POS device seat counts and the Occupied, Pairing, and Available rows](/img/hq/marketplace/my-subscriptions/en/seat-overview.png)

*Check the seat counts, shop, and status before choosing an action. The screenshots on this page use sample data.*

### Marketplace subscriptions

Use `Marketplace` to review marketplace products currently subscribed for the selected brand.

Depending on the product, the page can show actions such as:

- `Configure`
- `Unsubscribe`

`Configure` only appears for products that have a direct setup page. Marketplace-managed `3rd Party Platforms` usually continue through [General Settings](../online-ordering/general-settings.md) and [3rd Party Platforms](../online-ordering/third-party-platforms.md) instead.

## Steps

### Pair a POS tablet

1. Select `X1 Product` in `My Subscriptions`.
2. Find an `Available` seat for the correct shop.
3. Select `Pair device` on that row. `Pair X1 POS device` shows the code and its expiry countdown.
4. In the tablet's X1 POS setup, tap `Pair with a code`.
5. Enter the current code from HQ in the `Pairing code` field on the tablet.
6. Tap `Pair device` on the tablet.
7. Finish setup on the tablet. Keep the HQ dialog open when it shows `Device connected` so you can see when activation finishes.

![Pair X1 POS device dialog with a sample code, countdown, and pairing controls](/img/hq/marketplace/my-subscriptions/en/pair-device.png)

*Use the current code from your own HQ dialog. To replace the code before the tablet connects, select `Regenerate code` and enter the new code on the tablet.*

### Cancel a pairing

1. Select `Cancel pairing` in the open pairing dialog. If you have already closed it, use the `Cancel pairing` icon on the corresponding `Pairing` row when the icon is available. Closing the dialog with `Close` leaves the pairing in progress.
2. Check for `Pairing cancelled.` and confirm that the seat is `Available` again.

![Pairing cancelled success notification](/img/hq/marketplace/my-subscriptions/en/cancel-pairing-success.png)

*This notification confirms that HQ cancelled the pairing.*

### Release a replaced POS tablet

1. Select `X1 Product` in `My Subscriptions`.
2. Find the `Occupied` seat for the affected shop.
3. Check `Device`, `Activated`, and `Last Online` to make sure this is the old tablet.
4. Select the `Release device` icon in `Actions`.
5. Read the warning and check the device and shop in the confirmation dialog.
6. Select `Release device` to free the seat, or `Cancel` to keep the current device assigned.
7. Check for `Device subscription released.` and confirm that the seat changes to `Available`.

![Release device dialog showing the old tablet, shop, warning, and confirmation buttons](/img/hq/marketplace/my-subscriptions/en/release-device.png)

*Check the shop and tablet again before confirming.*

![Device subscription released success notification](/img/hq/marketplace/my-subscriptions/en/release-device-success.png)

*This notification confirms that the seat is ready for the replacement tablet.*

### Manage a marketplace subscription

1. Open `My Subscriptions`.
2. Select `Marketplace`.
3. Find the subscription you want to manage.
4. Select `Configure` if the product exposes a configuration page.
5. Select `Unsubscribe` if the product is no longer needed.
6. Confirm the unsubscribe action if prompted.

## What changes after you save

Releasing a POS device seat does not cancel the subscription. It clears the old device from that seat so another tablet can register. The old tablet loses access when it comes online and checks its subscription again.

Device names are recorded when a POS terminal activates or validates the subscription. Older occupied seats may show a shortened device ID with `Device name unavailable` until that tablet checks in with the current app.

When a shop profile is deleted from a POS terminal, the app releases that terminal's POS subscription seat before removing the local shop profile. If the POS shows `Unable to inactivate subscriptions`, do not continue deleting local setup until an admin or support confirms the seat state in HQ.

Removing a marketplace subscription can make related features or integrations unavailable immediately.

For marketplace-managed online-ordering platforms, unsubscribe can also remove the related channel availability and clear saved store-level platform settings. Treat `Unsubscribe` as a high-impact change.

## How to check your change

1. After activation, check for `X1 POS device paired successfully.` Confirm the correct shop's seat changes to `Occupied` and shows the new tablet under `Device`.
2. Check that the tablet finishes setup and opens the POS sign-in screen.
3. If the seat list has not updated, select `Refresh` and check the status again.
4. For marketplace subscriptions, confirm the product still appears if you kept it.
5. For marketplace subscriptions, confirm the product disappears from the active subscription list if you removed it.
6. If you removed a platform subscription, re-check [Channel Settings](../online-ordering/channel-mapping.md) or [3rd Party Platforms](../online-ordering/third-party-platforms.md) before trading.

## If something goes wrong

- If `Select a brand to view X1 POS subscription seats` appears, choose the correct brand first.
- If `No X1 POS subscription seats were found for this brand` appears, confirm that the brand has X1 POS seats assigned.
- If `X1 POS subscription database is unavailable` appears, ask support to check the production subscription database connection.
- If pairing is unavailable, ask an admin to check whether device pairing is enabled for this account. If your access allows it, you can also [set up the tablet with an HQ sign-in](../../getting-started/first-time-initialization.md).
- If the code expires before the tablet connects, use `Regenerate code` and enter the current code.
- If you released the wrong device, register the correct tablet again or ask support before the old tablet is reused.
- If a deleted POS shop profile still leaves the seat as `Occupied`, ask support to check whether the terminal failed while releasing the seat.
- If you unsubscribed by mistake, return to [Marketplace](./catalog.md) and re-subscribe if available.

## When to ask owner/admin

- You are not sure which tablet should be released.
- The tablet may still be in use by a live shop.
- The subscription affects live payment, ordering, or finance workflows.
- You are unsure whether another team or shop still uses the marketplace product.
