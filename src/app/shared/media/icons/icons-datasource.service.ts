import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconsDatasourceService {

  private icons = [
    { icon: "https://firebasestorage.googleapis.com/v0/b/anuplifestyles.appspot.com/o/assets%2Ficons%2FIcons%201.svg?alt=media&token=fea076ce-1517-4975-b533-ca2ff57addc7&_gl=1*1pk97mj*_ga*MTczOTIzMzg4LjE2OTQxNDY1Nzg.*_ga_CW55HF8NVT*MTY5NjMwOTc1MC4zNy4xLjE2OTYzMTUxMzUuNTUuMC4w" },
    { icon: "https://firebasestorage.googleapis.com/v0/b/anuplifestyles.appspot.com/o/assets%2Ficons%2FIcons%202.svg?alt=media&token=4359125c-23fc-4b0a-9f64-c6a86a76a2c7&_gl=1*1u3dbnk*_ga*MTczOTIzMzg4LjE2OTQxNDY1Nzg.*_ga_CW55HF8NVT*MTY5NjMwOTc1MC4zNy4xLjE2OTYzMTUxNTYuMzQuMC4w" },
    { icon: "https://firebasestorage.googleapis.com/v0/b/anuplifestyles.appspot.com/o/assets%2Ficons%2FIcons%203.svg?alt=media&token=502b9506-e088-46ab-ab50-23aa2a261f17&_gl=1*152eisg*_ga*MTczOTIzMzg4LjE2OTQxNDY1Nzg.*_ga_CW55HF8NVT*MTY5NjMwOTc1MC4zNy4xLjE2OTYzMTUxNjMuMjcuMC4w" },
    { icon: "https://firebasestorage.googleapis.com/v0/b/anuplifestyles.appspot.com/o/assets%2Ficons%2FIcons%204.svg?alt=media&token=b7ff0255-21cb-49bf-9b7d-af13519388f5&_gl=1*mi8b14*_ga*MTczOTIzMzg4LjE2OTQxNDY1Nzg.*_ga_CW55HF8NVT*MTY5NjMwOTc1MC4zNy4xLjE2OTYzMTUxNzkuMTEuMC4w" },
    { icon: "https://firebasestorage.googleapis.com/v0/b/anuplifestyles.appspot.com/o/assets%2Ficons%2FIcons%205.svg?alt=media&token=b617e305-3db2-4d55-812f-a991a77fbad8&_gl=1*1x1lciu*_ga*MTczOTIzMzg4LjE2OTQxNDY1Nzg.*_ga_CW55HF8NVT*MTY5NjMwOTc1MC4zNy4xLjE2OTYzMTUxODUuNS4wLjA." },
    { icon: "https://firebasestorage.googleapis.com/v0/b/anuplifestyles.appspot.com/o/assets%2Ficons%2FIcons%206.svg?alt=media&token=2a2e44f7-0012-414a-8515-467a57bd0df1&_gl=1*3umz2*_ga*MTczOTIzMzg4LjE2OTQxNDY1Nzg.*_ga_CW55HF8NVT*MTY5NjMwOTc1MC4zNy4xLjE2OTYzMTUxODkuMS4wLjA." },
  ]

  getIconsDatasourceService() {
    return this.icons;
  }
}
