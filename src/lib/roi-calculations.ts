export interface ROIInputs {
  leads: number;
  dealValue: number;
  teamSize: number;
  responseSpeedMinutes?: number;
}

export interface ROIResults {
  revenueLost: number;
  revenueRecovered: number;
  hoursSaved: number;
  roi: number;
  monthlyImpact: number;
  annualImpact: number;
  hoursSavedYear: number;
  opportunityScore: number;
}

export function calculateROI({
  leads,
  dealValue,
  teamSize,
  responseSpeedMinutes = 120,
}: ROIInputs): ROIResults {
  const lostLeadRate = 0.35;
  const recoveryRate = 0.28;
  const hoursPerLead = 0.5;
  const hourlyCost = 35;

  const revenueLost = leads * lostLeadRate * dealValue * 0.15;
  const revenueRecovered = leads * recoveryRate * dealValue * 0.12;
  const hoursSaved = leads * hoursPerLead * 0.6;
  const costSaved = hoursSaved * hourlyCost;
  const roi = ((revenueRecovered + costSaved) / (teamSize * 2000)) * 100;

  const monthlyImpact = revenueRecovered + costSaved;
  const annualImpact = monthlyImpact * 12;
  const hoursSavedYear = hoursSaved * 12;

  const speedFactor =
    responseSpeedMinutes >= 60 ? 12 : responseSpeedMinutes >= 30 ? 8 : responseSpeedMinutes >= 15 ? 4 : 0;

  const opportunityScore = Math.min(
    100,
    Math.round(
      (leads / 10) * 0.3 +
        (dealValue / 1000) * 0.3 +
        recoveryRate * 100 * 0.2 +
        (hoursSaved / 50) * 0.2 +
        speedFactor
    )
  );

  return {
    revenueLost,
    revenueRecovered,
    hoursSaved,
    roi,
    monthlyImpact,
    annualImpact,
    hoursSavedYear,
    opportunityScore,
  };
}

export function formatResponseSpeed(minutes: number): string {
  if (minutes >= 60) {
    const hours = Math.round(minutes / 60);
    return hours === 1 ? "1 hour" : `${hours} hours`;
  }
  return `${minutes} min`;
}
