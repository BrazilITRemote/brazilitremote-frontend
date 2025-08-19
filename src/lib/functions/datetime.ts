// Date/time helpers centralized with America/Sao_Paulo safety

// Helper function to get current date in Brasilia timezone as a Date instance
// The returned Date has its UTC fields set to represent the wall-clock time in Brasília
export const getDateFromBrasiliaTime = (date?: string): Date => {
  const now = date ? new Date(date) : new Date();

  const brasiliaDateTime = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const year = parseInt(
    brasiliaDateTime.find((part) => part.type === "year")?.value || "0",
    10
  );
  const month = parseInt(
    brasiliaDateTime.find((part) => part.type === "month")?.value || "0",
    10
  );
  const day = parseInt(
    brasiliaDateTime.find((part) => part.type === "day")?.value || "0",
    10
  );
  const hour = parseInt(
    brasiliaDateTime.find((part) => part.type === "hour")?.value || "0",
    10
  );
  const minute = parseInt(
    brasiliaDateTime.find((part) => part.type === "minute")?.value || "0",
    10
  );
  const second = parseInt(
    brasiliaDateTime.find((part) => part.type === "second")?.value || "0",
    10
  );

  const brasiliaDate = new Date();
  brasiliaDate.setUTCFullYear(year);
  brasiliaDate.setUTCMonth(month - 1);
  brasiliaDate.setUTCDate(day);
  brasiliaDate.setUTCHours(hour, minute, second, 0);

  return brasiliaDate;
};

// Returns numeric Y/M/D for the given instant as seen in America/Sao_Paulo
export const getBrasiliaDateParts = (
  d?: Date
): { year: number; month: number; day: number } => {
  const now = d ?? new Date();
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  return {
    year: parseInt(parts.find((p) => p.type === "year")?.value || "0", 10),
    month: parseInt(parts.find((p) => p.type === "month")?.value || "0", 10),
    day: parseInt(parts.find((p) => p.type === "day")?.value || "0", 10),
  };
};

// gets the NEXT first Thursday of the THIS OR NEXT month as a Date
export const getFirstThursdayOfMonth = (): Date => {
  const today = getDateFromBrasiliaTime();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const firstDayOfCurrentMonth = new Date(currentYear, currentMonth, 1);
  const firstThursdayOfCurrentMonth = new Date(firstDayOfCurrentMonth);
  firstThursdayOfCurrentMonth.setDate(
    firstThursdayOfCurrentMonth.getDate() +
      ((4 - firstThursdayOfCurrentMonth.getDay() + 7) % 7)
  );

  if (today >= firstThursdayOfCurrentMonth) {
    const firstDayOfNextMonth = new Date(currentYear, currentMonth + 1, 1);
    const firstThursdayOfNextMonth = new Date(firstDayOfNextMonth);
    firstThursdayOfNextMonth.setDate(
      firstThursdayOfNextMonth.getDate() +
        ((4 - firstThursdayOfNextMonth.getDay() + 7) % 7)
    );
    return firstThursdayOfNextMonth;
  }

  return firstThursdayOfCurrentMonth;
};

// Timezone-safe (America/Sao_Paulo) YYYY-MM-DD for the NEXT first Thursday of THIS or NEXT month
export const getFirstThursdayOfMonthYMD = (): string => {
  const { year, month, day: todayDay } = getBrasiliaDateParts();

  const dowFirst = new Date(Date.UTC(year, month - 1, 1, 12)).getUTCDay();
  const firstThursdayDay = 1 + ((4 - dowFirst + 7) % 7);

  let y = year;
  let m = month;
  if (todayDay >= firstThursdayDay) {
    if (m === 12) {
      y += 1;
      m = 1;
    } else {
      m += 1;
    }
  }

  const dowFirstChosen = new Date(Date.UTC(y, m - 1, 1, 12)).getUTCDay();
  const d = 1 + ((4 - dowFirstChosen + 7) % 7);

  const mm = String(m).padStart(2, "0");
  const dd = String(d).padStart(2, "0");
  return `${y}-${mm}-${dd}`;
};

// ===== Helpers genéricos para recorrência semanal (seguro de fuso América/São_Paulo) =====
const pad2 = (n: number): string => String(n).padStart(2, "0");
const ymd = (y: number, m: number, d: number): string =>
  `${y}-${pad2(m)}-${pad2(d)}`;
const getTodayBrasiliaYMD = (): string => {
  const { year, month, day } = getBrasiliaDateParts();
  return ymd(year, month, day);
};
const parseYMD = (s: string): { y: number; m: number; d: number } => {
  const [y, m, d] = s.split("-").map(Number);
  return { y, m, d };
};
const addDaysToYMD = (s: string, n: number): string => {
  const { y, m, d } = parseYMD(s);
  const dt = new Date(Date.UTC(y, m - 1, d + n, 12));
  return ymd(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate());
};
const compareYMD = (a: string, b: string): number => a.localeCompare(b);
const getDowUTCFromYMDNoon = (s: string): number => {
  const { y, m, d } = parseYMD(s);
  return new Date(Date.UTC(y, m - 1, d, 12)).getUTCDay(); // 0=Dom..6=Sáb
};

// Retorna a próxima (ou a própria) data com o dia da semana desejado dentro do intervalo [startYMD, endYMD].
// targetDow: 0=Domingo .. 6=Sábado
export const getNextWeekdayWithinRangeYMD = (
  targetDow: number,
  startYMD: string,
  endYMD: string
): string => {
  const today = getTodayBrasiliaYMD();

  if (compareYMD(today, endYMD) > 0) {
    return endYMD;
  }

  const anchor = compareYMD(today, startYMD) < 0 ? startYMD : today;
  const dow = getDowUTCFromYMDNoon(anchor);
  const add = (targetDow - dow + 7) % 7;
  const candidate = addDaysToYMD(anchor, add);

  if (compareYMD(candidate, endYMD) > 0) {
    return endYMD;
  }
  return candidate;
};
