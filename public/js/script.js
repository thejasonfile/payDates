const holidays = [
    "01/02/2017",
    "01/16/2017",
    "02/20/2017",
    "04/16/2017",
    "05/29/2017",
    "07/04/2017",
    "09/04/2017",
    "10/09/2017",
    "11/11/2017",
    "11/23/2017",
    "12/24/2017",
    "12/25/2017",
    "12/31/2017"
];

const nextTenPayDates = (payDate) => {

  const getDateObj = (payDate) => {
    return new Date(payDate);
  }

  const getNextPayDate = (payDate) => {
    let currentDate = getDateObj(payDate);
    let nextDate = currentDate.setDate(currentDate.getDate() + 14);
    return nextDate;
  }

  const buildDateString = (payDate) => {

    const dateObj = getDateObj(payDate);

    const addLeadingZero = (num) => {
      let newNum = '';
      return newNum.concat('0', num);
    }

    const getMonthStr = () => {
      let month = (dateObj.getMonth() + 1).toString();
      if (month.length < 2) {
        return addLeadingZero(month);
      } else {
        return month
      }
    }

    const getDateStr = () => {
      let date = dateObj.getDate().toString();
      if (date.length < 2) {
        return addLeadingZero(date);
      } else {
        return date
      }
    }

    const getYearStr = () => {
      return dateObj.getFullYear().toString();
    }

    return `${getMonthStr()}/${getDateStr()}/${getYearStr()}`;
  }

  const addDatesToArray = () => {
    let payDates = [];

    for (var i = 1; i <= 10; i++) {
      let newDate = getNextPayDate(payDate);
      newDate = buildDateString(newDate);
      payDates.push(newDate);
      payDate = newDate;
    }

    console.log(payDates);
    return payDates;
  }

  return addDatesToArray();
}

nextTenPayDates('05/01/2017');
