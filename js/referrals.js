$(function() {
  var date = new Date();
  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  var lastYear = $('#last-year');

  if (lastYear) {
    var start = new Date(year - 1, month, 1)
    var end = new Date(year - 1, month + 1, 0)
    var src = lastYear.attr('src').replace('*/*', start.toISOString() + '/' + end.toISOString());
    src = src.replace('title=TITLE', 'title=Referrals+in+' + monthNames[month -1] + ' ' + String(year - 1) )

    lastYear.attr('src', src)

    var yearBeforeLast = $('#year-before-last');
    var start = new Date(year - 2, month, 1)
    var end = new Date(year - 2, month + 1, 0)
    var src = yearBeforeLast.attr('src').replace('*/*', start.toISOString() + '/' + end.toISOString());
    src = src.replace('title=TITLE', 'title=Referrals+in+' + monthNames[month -1] + ' ' + String(year - 2) )

    yearBeforeLast.attr('src', src)
  }
});
