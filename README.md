

# Table of Contents
- [Table of Contents](#table-of-contents)
  - [Hello! I'm Dzineer.](#hello-im-dzineer)
  - [A little about Me](#a-little-about-me)
  - [Technologies \& Tools](#technologies--tools)
  - [Connect with Me](#connect-with-me)
 
<br/><br/><br/>

<a id="hello-im-dzineer"></a>

## Hello! I'm Dzineer.

![visitors](https://visitor-badge.laobi.icu/badge?page_id=dzineer.dzineer)

I'm interested in building AI Automations systems and tools.

<img align="right" src="./figures/dzineer_digital_whiteboard.png" width="100%" style="border-radius: 50%;"/>

<br/><br/><br/>

<a id="a-little-about-me"></a>

## A little about Me

I'm a software developer specializing in AI and automation systems. I have a strong background in Python, JavaScript/ReactJS, and PHP/Laravel. Here's a little more about me:


```python
class Dzineer(AI AutomationAISpecialist):
    def __init__(self):
        self.name     = "Frank"
        self.model    = ["Automations", "AI", "Design"]
        self.research = ["AI", "AI Automations", "Software Architect, Emphasis AI & Automations"]
        self.interest = ["Entrepreneurship", "IP", "VC Methods"]
```

JavaScript/ReactJS

```jsx

DzineerContext.jsx:

import React from 'react';
const DzineerContext = React.createContext();
export default DzineerContext;


DzineerProvider.jsx:

import React, { useEffect, useState } from 'react';
import DzineerContext from './DzineerContext';

const DzineerProvider = ({ children }) => {
    const [dzineerState, setDzineerState] = useState({
        name: "Frank",
        model: ["Automations", "AI", "Design"],
        research: ["AI", "AI Automations", "Software Architect, Emphasis AI & Automations"],
        interest: ["Entrepreneurship", "IP", "VC Methods"]
    });

    useEffect(() => {
        // Perform any side effects or data fetching here
    }, []);

    return (
        <DzineerContext.Provider value={dzineerState}>
            {children}
        </DzineerContext.Provider>
    );
};

export default DzineerProvider;

Dzineer.jsx:

import React from 'react';
import DzineerContext from './DzineerContext';

const Dzineer = () => {
    const dzineerState = React.useContext(DzineerContext);

    return (
        <div>
            <img src="https://img.shields.io/badge/AI-AI-informational?style=flat&logo=ai&logoColor=white&color=6aa6f8" alt="AI Badge" />
            <p>Name: {dzineerState.name}</p>
            <p>Model: {dzineerState.model.join(', ')}</p>
            <p>Research: {dzineerState.research.join(', ')}</p>
            <p>Interest: {dzineerState.interest.join(', ')}</p>
        </div>
    );
};

export default Dzineer;

App.jsx:


import React from 'react';
import DzineerProvider from './DzineerProvider';
import Dzineer from './Dzineer';

function App() {
    return (
        <DzineerProvider>
            <Dzineer />
        </DzineerProvider>
    );
}

export default App;

```


PHP/Laravel

```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dzineer extends Model
{
    protected $attributes = [
        'name' => 'Frank',
        'model' => '["Automations", "AI", "Design"]',
        'research' => '["AI", "AI Automations", "Software Architect, Emphasis AI & Automations"]',
        'interest' => '["Entrepreneurship", "IP", "VC Methods"]'
    ];
}


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Dzineer;

class DzineerController extends Controller
{
    public function show()
    {
        $dzineer = Dzineer::first();
        return view('dzineer', ['dzineer' => $dzineer]);
    }
}


<!-- resources/views/dzineer.blade.php -->

<div>
    <img src="https://img.shields.io/badge/AI-AI-informational?style=flat&logo=ai&logoColor=white&color=6aa6f8" alt="AI Badge" />
    <p>{{ $dzineer->name }}</p>
    <p>{{ $dzineer->model }}</p>
    <p>{{ $dzineer->research }}</p>
    <p>{{ $dzineer->interest }}</p>
</div>

```

<br/><br/><br/>

<a id="technologies--tools"></a>

## Technologies & Tools

**Cloud Services:**

![Azure](https://img.shields.io/badge/Cloud-Azure-informational?style=flat&logo=microsoft-azure&logoColor=white&color=6aa6f8)
![AWS](https://img.shields.io/badge/Cloud-AWS-informational?style=flat&logo=amazon-aws&logoColor=white&color=6aa6f8)
![AWS EC2](https://img.shields.io/badge/Compute-AWS_EC2-informational?style=flat&logo=amazon-ec2&logoColor=white&color=6aa6f8)
![AWS S3](https://img.shields.io/badge/Storage-AWS_S3-informational?style=flat&logo=amazon-s3&logoColor=white&color=6aa6f8)
![Git DevOps](https://img.shields.io/badge/DevOps-Git-informational?style=flat&logo=github&logoColor=white&color=6aa6f8)

**Pipelines:**

![Azure DevOps](https://img.shields.io/badge/Cloud-Azure-informational?style=flat&logo=azuredevops&logoColor=white&color=6aa6f8)
![Github DevOps](https://img.shields.io/badge/DevOps-Git-informational?style=flat&logo=github&logoColor=white&color=6aa6f8)

**Programming Languages:**

![Python](https://img.shields.io/badge/Code-Python-informational?style=flat&logo=python&logoColor=white&color=6aa6f8)
![PHP](https://img.shields.io/badge/Code-PHP-informational?style=flat&logo=c%2B%2B&logoColor=white&color=6aa6f8)
![JavaScript](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=c%2B%2B&logoColor=white&color=6aa6f8)

**Frameworks:**

![React](https://img.shields.io/badge/Framework-React-informational?style=flat&logo=c%2B%2B&logoColor=white&color=6aa6f8)
![Vue](https://img.shields.io/badge/Framework-Vue-informational?style=flat&logo=c%2B%2B&logoColor=white&color=6aa6f8)
![Laravel](https://img.shields.io/badge/Framework-Laravel-informational?style=flat&logo=c%2B%2B&logoColor=white&color=6aa6f8)
![NodeJS](https://img.shields.io/badge/Framework-NodeJS-informational?style=flat&logo=c%2B%2B&logoColor=white&color=6aa6f8)
![DjangoRestFramework](https://img.shields.io/badge/Framework-Django-informational?style=flat&logo=c%2B%2B&logoColor=white&color=6aa6f8)
![FastAPI](https://img.shields.io/badge/Framework-FastAPI-informational?style=flat&logo=c%2B%2B&logoColor=white&color=6aa6f8)

**Operating Systems:**

![Ubuntu](https://img.shields.io/badge/OS-Ubuntu-informational?style=flat&logo=c%2B%2B&logoColor=white&color=6aa6f8)
![Debian](https://img.shields.io/badge/OS-Debian-informational?style=flat&logo=c%2B%2B&logoColor=white&color=6aa6f8)
![Windows](https://img.shields.io/badge/OS-Windows-informational?style=flat&logo=c%2B%2B&logoColor=white&color=6aa6f8)
![MacOS](https://img.shields.io/badge/OS-Mac-informational?style=flat&logo=c%2B%2B&logoColor=white&color=6aa6f8)

**Prompt Engineering:**

![OpenAI](https://img.shields.io/badge/AI-OpenAI-informational?style=flat&logo=pytorch&logoColor=white&color=6aa6f8)
![Ollama](https://img.shields.io/badge/AI-Ollama-informational?style=flat&logo=scikit-learn&logoColor=white&color=6aa6f8)
![MLStudio](https://img.shields.io/badge/AI-LMStudio-informational?style=flat&logo=numpy&logoColor=white&color=6aa6f8)

**AI API Integrations:**

![OpenAI](https://img.shields.io/badge/API-OpenAI-informational?style=flat&logo=pytorch&logoColor=white&color=6aa6f8)
![Ollama](https://img.shields.io/badge/API-Ollama-informational?style=flat&logo=scikit-learn&logoColor=white&color=6aa6f8)
![MLStudio](https://img.shields.io/badge/API-LMStudio-informational?style=flat&logo=numpy&logoColor=white&color=6aa6f8)

**Databases:**

![MySQL](https://img.shields.io/badge/DB-Mysql-informational?style=flat&logo=mysql&logoColor=white&color=6aa6f8)
![Maria DB](https://img.shields.io/badge/DB-MariaDB-informational?style=flat&logo=db&logoColor=white&color=6aa6f8)
![PostgreSQL](https://img.shields.io/badge/DB-Postgresql-informational?style=flat&logo=postgresql&logoColor=white&color=6aa6f8)
![Redis](https://img.shields.io/badge/Cache-Redis-informational?style=flat&logo=redis&logoColor=white&color=6aa6f8)

**Hosting Tools and Services:**

![WHMCS](https://img.shields.io/badge/Admin-WHMCS-informational?style=flat&logo=whmcs&logoColor=white&color=6aa6f8)
![Plesk](https://img.shields.io/badge/Admin-Plesk-informational?style=flat&logo=plesk&logoColor=white&color=6aa6f8)

**Tools and Services <img src="./figures/dzineer_digital_whiteboard.png" width="40px">:**

![Kubernetes](https://img.shields.io/badge/Tools-Kubernetes-informational?style=flat&logo=kubernetes&logoColor=white&color=6aa6f8)
![Docker](https://img.shields.io/badge/Tools-Docker-informational?style=flat&logo=docker&logoColor=white&color=6aa6f8)
![Git](https://img.shields.io/badge/Tools-Git-informational?style=flat&logo=git&logoColor=white&color=6aa6f8)
![Streamlit](https://img.shields.io/badge/Tools-Streamlit-informational?style=flat&logo=streamlit&logoColor=white&color=6aa6f8)


<br /><br /><br />

<a id="connect-with-me"></a>

## Connect with Me

<p align="center">
&nbsp; <a href="https://twitter.com/Dzineer" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/plasticine/100/000000/twitter.png" width="50" /></a>    
&nbsp; <a href="https://www.linkedin.com/in/dzineer/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/plasticine/100/000000/linkedin.png" width="50" /></a>
&nbsp; <a href="mailto:frank@dzineer.com" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/plasticine/100/000000/gmail.png"  width="50" /></a>
</p>

