---
title: Reservations
---

:::info[Who this is for]
Managers and authorized front-of-house staff handling table bookings on the POS.
:::

## Before you start

- You are signed in with permission to open manager tools.
- The terminal is using the correct shop.
- Native booking has been enabled for the shop in HQ.
- The booking was created in HQ or from the public booking page.

## What this screen is for

`Reservations` shows the table bookings for the current shop, one day at a time.

Use it to:

- see how many bookings are due on the selected day
- check each booking's guest name, party size, table, and state
- mark a guest as `Arrived`
- move a guest to `Seated` with `Seat`
- mark a booking as `No-show`
- cancel a booking with `Cancel`
- pull the latest bookings from the cloud with `Refresh`

Screenshot pending: `static/img/manual/en/client/cl-53-reservations-board.png`

## Main views

The top counters show:

- `Total`
- `Pending`
- `Arrived`
- `Seated`

The reservation list shows:

- `Time`
- `Guest`
- `Party`
- `Table`
- `State`
- `Actions`

Use the date arrows next to the date at the top of the screen to view another day.

While the board loads, a loading indicator appears. If the selected day has no bookings, the board shows `No reservations for this day.`

### Booking states

- `Pending`: the booking was requested and is waiting for staff confirmation.
- `Confirmed`: staff accepted the booking.
- `Arrived`: the guest has reached the shop.
- `Seated`: the guest is at the table.
- `Cancelled`: the booking was called off by HQ staff, POS staff, or the guest.
- `Rejected`: HQ staff declined the booking request.
- `No-show`: the guest did not arrive.

`Seated`, `Cancelled`, `Rejected`, and `No-show` are final states. A booking in a final state cannot be changed again.

### Action buttons

Each row shows only the actions that are still valid for the booking's current state. `No-show` and `Cancel` appear only while the booking can still change (`Pending`, `Confirmed`, or `Arrived`). Bookings in a final state show no action buttons.

:::note[Browser demo mode]
In the browser demo POS, booking status changes are turned off and the status buttons cannot be used. The board shows `Booking status changes are unavailable in browser demo mode.`
:::

## Steps

1. Tap `More Tools`.
2. Tap `Reservations`.
3. Tap `Refresh` to pull the latest bookings from the cloud.
4. Check the counters at the top of the screen.
5. Use the date arrows if you need another day.
6. Find the guest by `Time` or `Guest`.
7. Tap `Arrived` when the guest reaches the shop.
8. Tap `Seat` when the guest is seated.
9. Tap `No-show` only when the manager confirms the guest should be marked as missed.
10. Tap `Cancel` only when the booking should not go ahead, for example when the guest calls to cancel.

## What you should see

The booking state changes right after you tap an action.

The change syncs back to HQ automatically:

- When the terminal is online, HQ normally shows the new state within a minute.
- When the terminal is offline, the change is queued and uploads as soon as the connection returns.

The same state should be visible on the HQ `Bookings` board. Changes made in HQ, or cancellations made by the guest online, appear on the POS after the next sync or when you tap `Refresh`.

## If something goes wrong

:::warning[`Reservations` is missing]
The feature may not be enabled for this shop or your POS user group may not have access. Ask a manager/admin to review HQ setup.
:::

:::warning[The booking is missing]
Tap `Refresh` and confirm the booking belongs to the same shop and date. If it was created from the public booking page, it may still be waiting for HQ approval.
:::

:::warning[The action fails]
Check the network connection first. If the POS shows `This reservation can no longer be changed to the selected state.`, the booking was already moved to a final state in HQ or by the guest. Tap `Refresh` to load the current state.
:::

## When to ask manager/admin

- You need to mark a booking as `No-show` or `Cancel` it.
- The guest says the booking details are wrong.
- The booking should be moved to another date, time, table, or shop.
- A booking appears on HQ but not on the POS after `Refresh`.

## Related guides

- [More Tools](./more-tools)
- [HQ Reservations](../hq/store-settings/reservations)
