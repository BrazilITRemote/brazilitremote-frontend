---
slug: grupo-estudos
status: drafting
intent: clear
review_required: false
pending-action: write .omo/plans/grupo-estudos.md
approach: Fix all bugs in the grupo de estudos page, restructure into three sections (current, upcoming, past), fix data model and logic bugs, fix component issues, and create a DESIGN.md for the page.
---

# Draft: grupo-estudos

## Components (topology ledger)
| id | outcome | status | evidence |
|----|---------|--------|----------|
| data-model | Fix Group.endDate handling (empty string vs proper date) | active | src/lib/groups.tsx:20-55 |
| logic | Fix getCurrentGroups to handle empty endDate; ensure allGroups separates current/upcoming/past | active | src/lib/functions/groups.ts:41-57 |
| page | Fix GroupsSection: section ID, max-w class, add three sections with labels | active | src/components/GroupsSection.tsx |
| card | Fix GroupCard: button text, badge positioning, leading typo | active | src/components/GroupCard.tsx |
| data | Populate groups with realistic data for all three states | active | src/lib/groups.tsx |
| design | Create DESIGN.md for the page | active | none yet |

## Open assumptions (announced defaults)
| assumption | adopted default | rationale | reversible? |
|------------|----------------|-----------|-------------|
| Page layout: three sections with labels | Current groups (prominent), Next groups, Past groups | User explicitly asked for past/current/next separation | Yes |
| Button text for current groups | "Participar" (matches EventCard convention) | Consistent with existing EventCard | Yes |
| Badge text | "Concluído" (already exists) | Already in code, correct Portuguese | Yes |
| Tailwind classes | Fix `max-w-4xl` → `max-w-7xl` (standard Tailwind) | `max-w-4xl` is not a standard Tailwind class | Yes |
| Section ID | `id="grupos-estudos"` (matches page slug) | Current `id="about"` is wrong for this page | Yes |
| Group data | Add 3+ groups: 1 current, 1 upcoming, 1+ past | User needs all three states to work | Yes |

## Findings (cited - path:lines)

### Bug: getCurrentGroups endDate comparison (src/lib/functions/groups.ts:44)
```ts
// Current code:
return groups.filter((group) => (parseGroupDate(group.date) < today) && parseGroupDate(group.endDate) > today)
// BUG: group.endDate is a string (e.g., ""), parseGroupDate("") produces Date(NaN).
// parseGroupDate expects YYYY-MM-DD format. Empty string → NaN → invalid Date.
// Any group with empty endDate will be EXCLUDED from current groups.
```

### Bug: GroupCard button text missing (src/components/GroupCard.tsx:115-116)
```tsx
// Current code:
<Button className="...">
</Button>
// BUG: Button has no text content. For current groups, the button renders empty.
// EventCard uses "Participar" for upcoming and "Assistir" for past.
```

### Bug: GroupCard badge positioning (src/components/GroupCard.tsx:46)
```tsx
// Current code:
<div className="... -top-4 -right-27 ...">
// BUG: -right-27 is not a valid Tailwind spacing value.
// Tailwind defaults: 0, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 14, 16, ...
// Should be -right-24 or -right-28 or use arbitrary: -right-[6rem]
```

### Bug: Typo in leading class (src/components/GroupCard.tsx:65, GroupsSection.tsx:37)
```tsx
// Current code:
className="*:leading-snug"
// BUG: "snug" is not a valid Tailwind value. Should be "snug" → "snug" → "snug"
// Tailwind values: tight, snug, normal, relaxed, loose
// Should be "*:leading-snug" → "*:leading-snug" → "*:leading-[0.875rem]" or "*:leading-snug"
// Actually: "snug" IS a valid Tailwind value (leading-snug = 0.875rem / 14px)
// BUT the typo is "leading-snug" which IS correct in Tailwind v4
// Wait — re-reading: the class is "leading-snug" which maps to leading-[0.875rem] in Tailwind v4
// This is actually CORRECT in Tailwind v4. No bug here.
```

### Bug: GroupsSection section ID (src/components/GroupsSection.tsx:13)
```tsx
// Current code:
<section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 flex-1">
// BUG: id="about" is wrong for a "Grupos de Estudos" page.
// Should be id="grupos-estudos" or id="groups"
```

### Bug: GroupsSection max-w class (src/components/GroupsSection.tsx:14)
```tsx
// Current code:
<div className="max-w-4xl mx-auto px-4">
// BUG: "max-w-4xl" is not a standard Tailwind class.
// Standard Tailwind classes: max-w-sm, max-w-md, max-w-lg, max-w-xl, max-w-2xl, max-w-3xl, max-w-4xl, max-w-5xl, max-w-6xl, max-w-7xl
// Actually in Tailwind v4, max-w-4xl IS a valid class (1152px).
// Wait — Tailwind v3/v4 standard: max-w-4xl IS valid (1152px). No bug here.
```

### Bug: GroupsSection mixing all groups without separation (src/components/GroupsSection.tsx:11)
```tsx
// Current code:
const allGroups = [...currentGroups, ...pastGroups];
// BUG: No separation between current, upcoming, and past groups.
// User explicitly asked for past/current/next separation.
// Also: getUpcomingGroups is imported but never used in GroupsSection.
```

### Bug: GroupCard activeLink empty string (src/components/GroupCard.tsx:41)
```tsx
// Current code:
const activeLink = isCurrent ? group.discord : group.live;
// BUG: When group.discord or group.live is "", the link href="" renders as relative URL to current page.
// Should guard against empty strings.
```

### Design issue: No DESIGN.md (no file found)
- No DESIGN.md exists in the project
- No reusable component system exists
- Page is a simple section with cards — needs design system for consistency

### Data issue: Only 2 groups, both missing key fields
- "AI Engineer": endDate="", discord="", live="", public=""
- "Golang com Testes": discord="", live="", public=""
- No group has discord/live links populated

## Decisions (with rationale)

1. **Three-section layout**: Current groups (prominent, with green accent), Next groups (with upcoming styling), Past groups (dimmed, with "Concluído" badge) — matches user request exactly.
2. **Fix all bugs first**, then add data — bugs prevent any group from rendering correctly.
3. **Use existing EventCard pattern** for button text: "Participar" for current/upcoming, "Assistir" for past.
4. **Tailwind v4 classes**: The project uses Tailwind v4 (`@tailwindcss/postcss`). Standard classes like `max-w-4xl` and `leading-snug` ARE valid in v4. No changes needed there.
5. **Group data**: Add realistic groups for each state. The data is static (array in groups.tsx) — no backend integration planned.

## Scope IN

- Fix all bugs in GroupsSection.tsx (section ID, layout)
- Fix all bugs in GroupCard.tsx (button text, badge positioning, empty link handling)
- Fix getCurrentGroups logic for empty endDate
- Add getUpcomingGroups usage in GroupsSection
- Restructure GroupsSection to show three labeled sections: Current / Next / Past
- Populate groups.tsx with realistic data covering all three states
- Create DESIGN.md for the grupo de estudos page
- Ensure dark mode works correctly for all new/modified elements

## Scope OUT (Must NOT have)

- Backend/API integration (data remains static array)
- Group creation/editing UI
- User authentication for group management
- Discord integration (links are strings, no API calls)
- Calendar view or date picker
- Search/filter functionality
- Any changes to Header, Footer, or other pages

## Open questions

None. All decisions have been made with clear rationale. The user can veto any adopted default at the approval gate.

## Approval gate
status: awaiting-approval
approach: Fix all bugs, restructure into three sections, add data, create DESIGN.md
next: present brief and wait for explicit user approval
