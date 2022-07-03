function domainName() {
  url = url.replace("http://", "").replace("https://", "").replace("www.", "");
  return url.split(".")[0];
}

url = "http://github.com/carbonfive/raygun";

console.log(domainName()); //-> domain name = "github"
