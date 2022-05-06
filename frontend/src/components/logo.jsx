import { Icon } from "@iconify/react";

import "../styles/components/logo.css"


export default function Logo() {
  return (
    <div id="main-logo">
      <h1>CRUD</h1>
      <div>
        <Icon className="icon" icon="jam:write" />
        <Icon className="icon" icon="jam:ghost-org-square" />
        <Icon className="icon" icon="jam:refresh" />
        <Icon className="icon" icon="jam:rubber" />
      </div>
      
    </div>
  )
}