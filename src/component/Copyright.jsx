import React from "react";

function Copyright() {
  return (
    <>
      Copyright &copy;<script>document.write(new Date().getFullYear());</script>{" "}
      All rights reserved | This template is made with{" "}
      <i className="ion-ios-heart" aria-hidden="true"></i> by{" "}
      <a className="bg-dark text-warning" href="#" target="_blank">
        whippo.com
      </a>
    </>
  );
}

export default Copyright;
