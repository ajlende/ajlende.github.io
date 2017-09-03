window.onload = setupRefresh;
function setupRefresh() {
  setTimeout("refreshPage();", 5000); // milliseconds
}
function refreshPage() {
   window.location = location.href;

}