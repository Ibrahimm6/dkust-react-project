export const getBgColor = (category) => {
  const colors = { 
    Software: '#1e3a8a', 
    Robotics: '#14532d', 
    AI: '#1e40af', 
    Hardware: '#451a03', 
    Security: '#0f172a' 
  };
  return colors[category] || '#1e3a8a';
};