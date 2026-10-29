export const projects = [
  {
    slug: 'buildledger',
    aliases: ['my_app'],
    category: 'Contractor finance · Mobile',
    year: '2026',
    title: 'BuildLedger',
    card: 'Project finance for contractors. Partners, money in and out, profit and loss, and settlements that stay on the device until the cloud is reachable.',
    summary:
      'BuildLedger is a Flutter app for keeping a contractor’s books by job. Each project holds partners, investments, expenses, and revenue, then rolls them into profit, loss, and settlements. The dashboard reads across every job, and entries stay on the phone when the network does not.',
    tags: ['Flutter', 'Firebase', 'Riverpod'],
    points: [
      {
        title: 'A book for each job',
        body: 'Projects move from planning to active, on hold, completed, or cancelled. Books can be kept on an accrual or cash basis.',
      },
      {
        title: 'Partners and capital',
        body: 'Partners, investments, and settlements live on the project: profit withdrawals, loss contributions, investment refunds, and capital withdrawals.',
      },
      {
        title: 'Money in and money out',
        body: 'Expenses and revenue have their own statuses, from unpaid or pending through partially paid, paid, and overdue.',
      },
      {
        title: 'One overview',
        body: 'The dashboard combines every project for this month, last month, this quarter, or a custom range, with financial health, alerts, and charts.',
      },
      {
        title: 'Reports you can hand over',
        body: 'Profit and loss, expenses, revenue, and investments export to PDF, CSV, or Excel on Pro and Business.',
      },
      {
        title: 'Sign-in before the books open',
        body: 'Email, Google, a reset flow, and email verification. Onboarding runs before the first session.',
      },
    ],
    notes: [
      {
        title: 'What gets recorded',
        paragraphs: [
          'A project is the unit of work. Under it sit partners, investments, expenses, revenue, and settlements, and a ledger that ties those movements together.',
        ],
        items: [
          'Expenses cover materials, labour, equipment, transportation, subcontractors, permits, rent, electricity, water, fuel, professional fees, office, and marketing.',
          'Payments can be cash, bank transfer, UPI, cheque, or other.',
          'Revenue covers advances, milestones, final payments, additional work, and variation orders.',
          'Charts break the period into revenue, expenses, investment, profit, and cash, plus profit by project, category, and partner.',
          'Shortcuts open profit versus cash, the transaction history, and a badge of financial alerts.',
        ],
      },
      {
        title: 'Plans',
        paragraphs: [
          'Limits live in one catalog, not scattered through the screens. Subscriptions are wired through RevenueCat.',
        ],
        items: [
          'Free is ₹0: 2 projects, 3 partners on each, and basic expense tracking and reports.',
          'Pro lifts the project and partner caps and adds advanced reports, PDF, CSV, and Excel export, analytics, and cloud backup.',
          'Business adds team members, multiple users, role-based permissions, company-level reporting, and priority support.',
        ],
      },
      {
        title: 'Offline, then the cloud',
        paragraphs: [
          'If the phone is offline, a bar on the shell says entries stay saved on the device until the cloud is reachable. When the connection returns, the books sync to Cloud Firestore.',
          'The shell is four places: Dashboard, Projects, Reports, and Profile. Opening a project reaches partners, investments, expenses, and revenue without leaving that job.',
        ],
      },
    ],
    build: 'Flutter with Riverpod and GoRouter. Firebase covers auth, Firestore, storage, cloud functions, messaging, analytics, and crashlytics. Charts use fl_chart. Exports use PDF, CSV, and Excel packages.',
    stack: [
      'Flutter',
      'Riverpod',
      'GoRouter',
      'Firebase Auth',
      'Cloud Firestore',
      'Cloud Functions',
      'RevenueCat',
    ],
  },
  {
    slug: 'sunrise-arc',
    category: 'Alarms · Mobile',
    year: '2026',
    title: 'Sunrise Arc',
    card: 'Alarms that only live inside a daylight window. Active times are drawn on an arc, and Android schedules them natively.',
    summary:
      'Sunrise Arc is a React Native alarm app built around a daylight window. You set when the day opens and closes, and new alarms have to sit inside that range. The home screen draws the active hours on an arc. On Android, a native module schedules the alarm so it can ring after the app is closed.',
    tags: ['React Native', 'Android', 'SVG'],
    points: [
      {
        title: 'A window, not a whole day',
        body: 'Drag either handle on the arc. The window can apply every day, on weekdays, or on days you pick, and it can refuse alarms outside that range.',
      },
      {
        title: 'Three kinds of alarm',
        body: 'Once, on a repeating interval, or monthly. The home list shows each one, and the caption counts how many are enabled inside the window.',
      },
      {
        title: 'Two ways to pick a time',
        body: 'Wheels step the hour and minute, with AM and PM in 12-hour mode. Arc mode drags a sun around the daylight window.',
      },
      {
        title: 'Full screen or a notification',
        body: 'Full screen opens a ringing view with sound until you slide to stop. Notification sends a notice only, with no looping sound.',
      },
      {
        title: 'Before and after it rings',
        body: 'An optional reminder fires a few minutes early. Missed-alarm alerts cover a slept-through alarm that was stopped late. Snooze and vibration are settings of their own.',
      },
      {
        title: 'Still yours when it is closed',
        body: 'Alarms, the window, and settings are stored on the device. Android asks for notifications, exact alarms, and unrestricted battery so it can ring in the background.',
      },
    ],
    notes: [
      {
        title: 'The daylight window',
        paragraphs: [
          'The window screen shows when it opens and when it closes. Enforce for all alarms blocks anything created outside that range. The same window can follow every day, weekdays only, or a custom set of days.',
          'Home draws the enabled hours on the arc and names the range in the time format you chose, 12-hour or 24-hour. An empty list invites the first alarm.',
        ],
      },
      {
        title: 'When an alarm fires',
        paragraphs: [
          'The ringing screen shows the live clock and the alarm. Slide across the track to dismiss it, or snooze. A preview in settings fires a sample without waiting for a real time.',
          'Tones shipped with the app are Silent, Sunbeam, Horizon, and Ember. Appearance follows dark, light, or the system. The default sound, default snooze, and reminder lead time are all editable.',
        ],
      },
    ],
    build: 'React Native, with SVG for the arcs and Async Storage for alarms, the window, and settings. Android alarms go through a native DaylightAlarm module: exact alarms, full-screen intent, and battery-optimization access.',
    stack: ['React Native', 'SVG', 'Async Storage', 'Android alarms'],
  },
]

const bySlug = new Map()
for (const project of projects) {
  bySlug.set(project.slug, project)
  for (const alias of project.aliases ?? []) bySlug.set(alias, project)
}

export function projectFromHash(hash) {
  const match = /^#project\/([^/?#]+)$/.exec(hash)
  if (!match) return null
  return bySlug.get(decodeURIComponent(match[1])) ?? null
}
