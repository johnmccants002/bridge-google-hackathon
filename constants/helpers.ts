export function isValidUrl(link: string) {
  // This regular expression checks for the general structure of a URL including protocols (http, https).
  // It also checks for characters typically found in a URL and supports ports, paths, queries, and anchors.
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name and extension
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // anchor
  return !!pattern.test(link);
}

// Example usage
const link1 = "https://www.usa.gov";
console.log(isValidUrl(link1)); // true

const link2 =
  "Contact your state's Department of Health or Human Services for more information.";
console.log(isValidUrl(link2)); // false
