import React from 'react'
import Card from './Card'

export default function Home() {
  return (
    <div className=' justify-content-center align-items-center'>
      <div className="container   d-flex flex-wrap  ">
        <Card icon={""} name={"Executive Summary"} />
        <Card icon={<i class="bi bi-menu-down"></i>} name={"Incidents List"} />
        <Card icon={""} name={"Prioritization matrix"} />
        <Card icon={""} name={"Top Threat types"} />

        <Card icon={""} name={"Response Playbook"} />
        <Card icon={""} name={"Threat Prioritization"} />
        <Card icon={""} name={"Vulnerability Correlation"} />
        <Card icon={<i class="bi bi-exclamation-triangle"></i>} name={"risk summary"} />

        <Card icon={""} name={"Heatmap matrix"} />
        <Card icon={""} name={"Common Vulnerabilities"} />
        <Card icon={<i class="bi bi-list-ul"></i>} name={"To_do List"} />
        <Card icon={<i class="bi bi-check-circle"></i>} name={""} />

        <Card icon={""} name={"Cyber Risk Level"} />
        <Card icon={<i class="bi bi-file-earmark-text"></i>} name={"Report an Incident"} />
     </div>
    </div>
  )
}
