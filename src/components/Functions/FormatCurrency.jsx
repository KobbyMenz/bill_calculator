//============= FORMAT CURRENCY ================

const FormatCurrency = (value) => {
  const locale = "en-GB";
  const option = {
    style: "currency",
    currency: "GHC",
  };

  return new Intl.NumberFormat(locale, option).format(value);
};
export default FormatCurrency;
