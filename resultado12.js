return ({ Adult: Math.round(((percentage / 100) * Adult + Adult) * 100) / 100,
    Senior: Math.round(((percentage / 100) * Senior + Senior) * 100) / 100,
    Child: Math.round(((percentage / 100) * Child + Child) * 100) / 100,
  });