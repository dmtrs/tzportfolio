export const transform_date = timestamp => {
  const dt = new Date();
  dt.setTime(Date.parse(timestamp));
  return dt;
}

export const transform_mutez = v => Number(v/1000000);
