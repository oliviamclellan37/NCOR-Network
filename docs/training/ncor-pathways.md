<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>NCOR Certificate Pathways</title>
    <link rel="stylesheet" href="https://raw.githubusercontent.com/johnbeve/NCOR-Test/main/docs/stylesheets/extra.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            position: relative;
        }
        body::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('https://raw.githubusercontent.com/johnbeve/NCOR-Test/main/docs/assets/ontology-training.png');
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
            opacity: 0.1;
            z-index: -1;
        }
        main {
            position: relative;
            z-index: 2;
        }
        #intro, #open-source {
            background: #f9f9f9;
            padding: 20px;
            text-align: center;
        }
        .top-image {
            width: 100%;
            display: block;
        }
        .dropdown {
            position: relative;
        }
        .dropdown-toggle {
            position: relative;
            cursor: pointer;
        }
        .dropdown-header p {
            margin-bottom: 0;
        }
        .dropdown-content {
            display: none;
            background: #00478e;
            color: white;
            margin-top: 10px;
            padding: 10px;
            border-radius: 5px;
            border: 2px solid #00478e;
            text-align: left;
        }
        .content-block, .dropdown-content {
            animation: none;
            opacity: 1;
            transform: none;
        }
        .dropdown-active .dropdown-content {
            display: block;
        }
        .dropdown-active .dropdown-header {
            display: none; 
        }
        @keyframes fadeInRight {
            0% {opacity: 0;
                transform: translateX(20px);}
            100% {opacity: 1;
                transform: translateX(0);}
        }
        .content-block {
            opacity: 0;
            transform: translateX(0px);
            animation-fill-mode: forwards; 
            cursor: pointer;
        }
        .arrow {
            display: block;
            position: static;
            top: 10px;  
            right: 50%;
        }
        .dropdown-active .arrow {
            transform: rotate(180deg) translateX(0%);
        }
        .dropdown-active .content-block {
            animation: fadeInRight 0.5s ease-out forwards;
        }
        .dropdown-active .content-block:nth-child(1) {
            animation-delay: 0.2s; 
        }
        .dropdown-active .content-block:nth-child(2) {
            animation-delay: 0.4s;
        }
        .dropdown-active .content-block:nth-child(3) {
            animation-delay: 0.6s; 
        }
        .dropdown-active .content-block:nth-child(4) {
            animation-delay: 0.8s; 
        } 
        h2, #foundational, #associate, #specialist {
            text-align: center;
            font:bold;
        }
        p {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
        li {
            margin: 0;
            padding: 0.2em;
        }
    </style>
</head>
<body>
    <header><center><h1>NCOR Certificate Pathways</h1></center></header>
    <main>
    <section id="foundational">
        <h2><b>Foundational Certificates</b></h2>
        <p>Explore foundational ontology engineering concepts, technologies, and the semantic web stack that can facilitate their development.</p>
        <div class="card-container">
            <article class="card dropdown">
                <div class="dropdown-toggle">
                    <span class="arrow">&#9662;</span>
                    <div class="dropdown-header">
                        <h3 class="dropdown-title">Basic Formal Ontology (BFO) Practitioner</h3>
                        <p>Learn the basics of BFO classes and relations, applications, and design patterns.</p>
                    </div>
                </div>
                <div class="dropdown-content">
                    <div class="content-block">
                        <h4>Overview</h4>
                        <p>The BFO Practitioner Certificate introduces students to the fundamentals of modeling data with the Basic Formal Ontology (BFO), a top-level architecture used by over 500 ontology and knowledge graph projects across the world. Students gain hands-on modeling experiences, working with subject-matter experts on active open-source projects leveraging BFO. Additionally, students will learn the philosophical and practical motivations for the distinctions drawn in BFO. This certificate course covers necessary building blocks for mastering differences and similarities across alternative top-level ontology architectures as well as for leveraging open-source ontologies to model specific domains, such as biomedicine, cyber security, climate change, and immigration, among many others. Throughout the course, students will learn to develop, curate, validate, and implement BFO in support of enterprise solutions.</p>
                       <p>Duration: 8 Hours</p>
                    </div>
                    <div class="content-block">
                        <h4>Course Objectives</h4>
                        <ul>
                            <li>Top-Level Principles of BFO</li>
                            <li>The BFO Hierarchy</li>
                            <li>Formal Implementations of BFO</li>
                            <li>Translating from Natural Language into BFO</li>
                            <li>Implementing BFO-Conformant Design Patterns</li>
                            <li>Extending BFO by Downward Population</li>
                            <li>Validating Extensions of BFO</li>
                        </ul>
                    </div>
                    <div class="content-block">
                        <h4>Intended Audience</h4>
                        <ul>
                            <li>Individuals responsible for articulating the benefits of leveraging BFO to others</li>
                            <li>Individuals interested in gaining hands-on training modeling with BFO</li>
                            <li>Knowledge representation, Ontology or Data Architects/Engineers</li>
                            <li>SysOps Administrators</li>
                            <li>Existing users of BFO or extensions of BFO</li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
        <div class="card-container">
            <article class="card dropdown">
                <div class="dropdown-toggle">
                    <span class="arrow">&#9662;</span>
                    <div class="dropdown-header">
                        <h3 class="dropdown-title">Ontology Engineer (ONE)</h3>
                        <p>Develop expertise with standard ontology engineering best practices, tools, and modeling strategies.</p>
                    </div>
                </div>
                <div class="dropdown-content">
                    <div class="content-block">
                        <h4>Overview</h4>
                        <p>The Ontology Engineer Certificate introduces students to the fundamentals of ontology engineering, focused on the creation, updating, maintaining, and validating of ontologies and knowledge graphs in contemporary system architectures. This course provides students hands-on training to master the semantic web stack, equipping students with the competency needed to integrate and curate ontologies effectively. This certificate serves as a stepping stone for certificates covering specialized topics such as optimized information extraction, semantic web devOps best practices, description logic, and cybersecurity related to the semantic web.</p>
                       <p>Duration: 8 Hours</p>
                    </div>
                    <div class="content-block">
                        <h4>Course Objectives</h4>
                        <ul>
                            <li>RDF, RDFS, and a zoo of W3C standards</li>
                            <li>OWL2 Full, OWL2 DL Direct Semantics, and OWL Profiles</li>
                            <li>Principles of Version Control using GitHub</li>
                            <li>Open-Source CI/CD tools for ontology development, e.g., Protege, ROBOT, OnTop, GraphDB</li>
                            <li>Extraction and Validation with the Semantic Web Stack, e.g., SPARQL, SHACL</li>
                        </ul>
                    </div>
                    <div class="content-block">
                        <h4>Intended Audience</h4>
                        <ul>
                            <li>Individuals using or interested in leveraging semantic web technologies in existing workflows</li>
                            <li>Knowledge representation, Ontology or Data Architects/Engineers</li>
                            <li>Existing users of BFO or extensions of BFO</li>
                            <li>DevOps and SysOps Administrators</li>
                            <li>Software Developers</li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
    </section>
    <section id="associate">
        <h2><b>Associate Certificates</b></h2>
        <p>Sharpen foundational ontology engineering skills focusing on information extraction, devOps, and ontology-based modeling.</p>
        <div class="card-container">
            <article class="card dropdown">
                <div class="dropdown-toggle">
                    <span class="arrow">&#9662;</span>
                    <div class="dropdown-header">
                        <h3 class="dropdown-title">Knowledge Extraction Specialist (KES)</h3>
                        <p>Master RDF-based information extraction strategies and technologies.</p>
                    </div>
                </div>
                <div class="dropdown-content">
                    <div class="content-block">
                        <h4>Overview</h4>
                        <p>The Knowledge Extraction Specialist Certificate builds on skills developed in the Ontology Engineering Certificate, emphasizing information extraction using technologies based on the Web Ontology Language (W3C) Resource Description Framework (RDF). Practitioners will explore the costs and benefits of storing in and retrieving information from graph database vs relational database technologies, and accordingly gain hands-on experience writing (with AI support) SPARQL and SQL queries. This course equips practitioners with the competence needed to make informed decisions about database architectures, gained by investigating real-world use cases. This certificate serves as a stepping stone for deep-dive certificates covering topics such as referent tracking and cybersecurity related to the semantic web.</p>
                       <p>Duration: 16 Hours</p>
                    </div>
                    <div class="content-block">
                        <h4>Course Objectives</h4>
                        <ul>
                            <li>Writing SPARQL and SQL queries for specific use cases</li>
                            <li>Leveraging Large-Language Models for query writing</li>
                            <li>Evaluating the impacts of computational complexity and compute time</li>
                            <li>Evaluating the tradeoff between semantic expressivity and compute time</li>
                        </ul>
                    </div>
                    <div class="content-block">
                        <h4>Intended Audience</h4>
                        <ul>
                            <li>Database managers</li>
                            <li>Knowledge representation, Ontology or Data Architects/Engineers</li>
                            <li>Existing users of BFO or extensions of BFO</li>
                            <li>Data scientists and Data architects</li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
        <div class="card-container">
             <article class="card dropdown">
                <div class="dropdown-toggle">
                    <span class="arrow">&#9662;</span>
                    <div class="dropdown-header">
                        <h3 class="dropdown-title">Semantic Web DevOps Engineer (SWD)</h3>
                        <p>Deep-dive into the intersection of ontology engineering and DevOps best practices.</p>
                        </div>
                        </div>
                        <div class="dropdown-content">
                            <div class="content-block">
                                <h4>Overview</h4>
                                <p>The SWD Certificate provides comprehensive training at the intersection of ontology engineering and DevOps best practices. Participants will learn how to efficiently manage and deploy semantic web technologies in a DevOps environment, integrating continuous integration/continuous deployment (CI/CD) pipelines with ontology development workflows. The course covers automation tools, containerization, orchestration, and monitoring techniques specific to semantic web applications. Through hands-on labs and real-world examples, students will gain practical experience in optimizing the development, deployment, and maintenance of semantic web solutions.</p>
                                <p>Duration: 8 Hours</p>
                            </div>
                            <div class="content-block">
                                <h4>Course Objectives</h4>
                                <ul>
                                    <li>Understanding the principles of DevOps in the context of semantic web technologies</li>
                                    <li>Implementing CI/CD pipelines for ontology development</li>
                                    <li>Utilizing automation tools for semantic web application deployment</li>
                                    <li>Applying containerization and orchestration techniques</li>
                                    <li>Monitoring and maintaining semantic web applications</li>
                                </ul>
                            </div>
                            <div class="content-block">
                                <h4>Intended Audience</h4>
                                <ul>
                                    <li>DevOps engineers interested in semantic web technologies</li>
                                    <li>Ontology engineers and developers</li>
                                    <li>IT professionals responsible for deploying and maintaining semantic web applications</li>
                                    <li>Software developers looking to integrate semantic technologies with DevOps practices</li>
                                    <li>Researchers and practitioners in the field of knowledge representation and DevOps</li>
                                </ul>
                            </div>
                        </div>
            </article>
            <article class="card dropdown">
                <div class="dropdown-toggle">
                    <span class="arrow">&#9662;</span>
                    <div class="dropdown-header">
                        <h3 class="dropdown-title">Top-Level Ontology Engineer (TLO)</h3>
                        <p>Master the motivations for and applications of various top-level ontologies.</p>
                    </div>
                </div>
                <div class="dropdown-content">
                    <div class="content-block">
                        <h4>Overview</h4>
                        <p>The Top-Level Ontology Engineer Certificate builds on skills developed in the Basic Formal Ontology Practitioner Certificate, expanding coverage to alternative top-level ontology classification choices, modeling patterns, and applications using real-world data and use cases. This certificate serves as a stepping stone for expert-level certification in topics such as referent tracking and cybersecurity related to the semantic web.</p>
                       <p>Duration: 8 Hours</p>
                    </div>
                    <div class="content-block">
                        <h4>Course Objectives</h4>
                        <ul>
                            <li>Guiding principles and classifications of several top-level ontologies, e.g. BFO, DOLCE, YAMATO</li>
                            <li>Formal Implementations of top-level ontologies</li>
                            <li>Translating from one top-level ontology into another</li>
                            <li>Adjudicating semantic overlap and disagreement</li>
                            <li>Semantic mappings across top-level architectures</li>
                            <li>Validating mappings across top-level architectures</li>
                        </ul>
                    </div>
                    <div class="content-block">
                        <h4>Intended Audience</h4>
                        <ul>
                            <li>Individuals responsible for articulating the benefits of leveraging BFO to others</li>
                            <li>Individuals interested in gaining hands-on training modeling with BFO</li>
                            <li>Knowledge representation, Ontology or Data Architects/Engineers</li>
                            <li>SysOps Administrators</li>
                            <li>Existing users of BFO or extensions of BFO</li>
                        </ul>
                    </div>
                </div>
            </article>
                <article class="card dropdown">
                <div class="dropdown-toggle">
                    <span class="arrow">&#9662;</span>
                    <div class="dropdown-header">
                        <h3 class="dropdown-title">Mid-Level Ontology Engineer (MLO)</h3>
                        <p>Strengthen competence with the deployment of mid-level ontology structures, such as the Common Core Ontology suite.</p>
                    </div>
                </div>
                <div class="dropdown-content">
                    <div class="content-block">
                        <h4>Overview</h4>
                        <p></p>
                       <p>Duration: 8 Hours</p>
                    </div>
                    <div class="content-block">
                        <h4>Course Objectives</h4>
                        <ul>
                            <li>Principles of the Common Core Ontologies suite</li>
                            <li>The CCO Hierarchy</li>
                            <li>Formal Implementations of CCO</li>
                            <li>Translating from Natural Language into CCO</li>
                            <li>Implementing CCO-Conformant Design Patterns</li>
                            <li>CCO extension modules</li>
                            <li>Validating conformance to CCO</li>
                        </ul>
                    </div>
                    <div class="content-block">
                        <h4>Intended Audience</h4>
                        <ul>
                            <li>Individuals responsible for articulating the benefits of leveraging CCO to others</li>
                            <li>Individuals interested in gaining hands-on training modeling with CCO</li>
                            <li>Knowledge representation, Ontology or Data Architects/Engineers</li>
                            <li>SysOps Administrators</li>
                            <li>Existing users of CCO or modules of CCO</li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
    </section>
    <section id="specialist">
        <h2><b>Specialist Certificates</b></h2>
        <p>Master specialized ontology engineering topics, such as cyber security and referent-tracking.</p>
        <div class="card-container">
            <article class="card dropdown">
                <div class="dropdown-toggle">
                    <span class="arrow">&#9662;</span>
                    <div class="dropdown-header">
                        <h3 class="dropdown-title">Semantic Web Security Specialist (SWS)</h3>
                        <p>Deep-dive into unique cyber security challenges arising from the semantic web.</p>
                        </div>
                        </div>
                        <div class="dropdown-content">
                            <div class="content-block">
                                <h4>Overview</h4>
                                <p>The SWS Certificate equips participants with the knowledge and skills to address the unique cyber security challenges presented by the semantic web. This course delves into the intricacies of securing semantic web technologies, including RDF, OWL, and SPARQL, and explores potential vulnerabilities and threat vectors associated with these technologies. Students will learn best practices for securing semantic data, implementing security protocols, and ensuring data integrity and confidentiality in semantic web applications. The course includes hands-on labs and real-world scenarios to provide practical experience in defending against cyber threats in a semantic web context.</p>
                                <p>Duration: 8 Hours</p>
                            </div>
                            <div class="content-block">
                                <h4>Course Objectives</h4>
                                <ul>
                                    <li>Understanding the security challenges of the semantic web</li>
                                    <li>Securing RDF, OWL, and SPARQL technologies</li>
                                    <li>Identifying and mitigating vulnerabilities in semantic web applications</li>
                                    <li>Implementing security protocols for semantic data</li>
                                    <li>Ensuring data integrity and confidentiality in semantic web environments</li>
                                </ul>
                            </div>
                            <div class="content-block">
                                <h4>Intended Audience</h4>
                                <ul>
                                    <li>Cyber security professionals focusing on emerging technologies</li>
                                    <li>Semantic web developers and engineers</li>
                                    <li>Data protection officers and privacy experts</li>
                                    <li>IT professionals interested in semantic web security</li>
                                    <li>Researchers and academics in cyber security and semantic technologies</li>
                                </ul>
                            </div>
                        </div>
            </article>
            <article class="card dropdown">
                <div class="dropdown-toggle">
                    <span class="arrow">&#9662;</span>
                    <div class="dropdown-header">
                       <h3 class="dropdown-title">Referent Tracking Specialist (RTE)</h3>
                        <p>Develop expertise in the use of ontologies to track information through complex networks.</p>
                        </div>
                        </div>
                        <div class="dropdown-content">
                            <div class="content-block">
                                <h4>Overview</h4>
                                <p>The RTE Certificate introduces participants to the fundamentals of referent tracking, a methodology used to maintain precise records of entities and their interactions across complex networks using ontologies. Students will learn how to apply referent tracking principles to ensure accurate and consistent data representation, crucial for high-stakes fields like healthcare, defense, and enterprise information systems. The course covers the design and implementation of referent tracking systems, the integration of these systems with existing ontological frameworks, and the use of referent tracking to enhance data quality and interoperability. Participants will engage in practical exercises and case studies to develop, manage, and optimize referent tracking systems in real-world scenarios.</p>
                                <p>Duration: 8 Hours</p>
                            </div>
                            <div class="content-block">
                                <h4>Course Objectives</h4>
                                <ul>
                                    <li>Understanding the principles of referent tracking</li>
                                    <li>Designing and implementing referent tracking systems</li>
                                    <li>Integrating referent tracking with existing ontological frameworks</li>
                                    <li>Applying referent tracking to enhance data quality and interoperability</li>
                                    <li>Hands-on experience with referent tracking tools and methodologies</li>
                                </ul>
                            </div>
                            <div class="content-block">
                                <h4>Intended Audience</h4>
                                <ul>
                                    <li>Data scientists and information systems professionals</li>
                                    <li>Ontology and knowledge graph developers</li>
                                    <li>Healthcare informatics specialists</li>
                                    <li>Defense and intelligence analysts</li>
                                    <li>Anyone interested in improving data accuracy and interoperability</li>
                                </ul>
                            </div>
                        </div>
            </article>
            <article class="card dropdown">
                <div class="dropdown-toggle">
                    <span class="arrow">&#9662;</span>
                    <div class="dropdown-header">
                        <h3 class="dropdown-title">Description Logic Specialist (DLS)</h3>
                        <p>Gain expertise in the family of description logics underwriting ontology reasoners.</p>
                        </div>
                        </div>
                        <div class="dropdown-content">
                            <div class="content-block">
                                <h4>Overview</h4>
                                <p>The DLS Certificate provides an in-depth understanding of Description Logics (DL), which are the formal foundations of ontology reasoners. Participants will explore the theoretical aspects of DL, practical applications, and the use of DL in various ontology-based systems. The course covers the syntax and semantics of DL, reasoning techniques, and how DL can be used to model complex relationships in different domains. Students will engage with real-world case studies and participate in hands-on sessions to build, validate, and deploy DL-based ontologies. This certificate is essential for those looking to leverage DL for advanced ontology development and reasoning tasks across sectors such as healthcare, cybersecurity, and information management.</p>
                                <p>Duration: 8 Hours</p>
                            </div>
                            <div class="content-block">
                                <h4>Course Objectives</h4>
                                <ul>
                                    <li>Understanding the fundamentals of Description Logics</li>
                                    <li>Exploring the syntax and semantics of various DLs</li>
                                    <li>Learning about reasoning techniques and algorithms in DL</li>
                                    <li>Applying DL to model complex relationships in ontologies</li>
                                    <li>Using DL-based tools and reasoners for ontology validation and inference</li>
                                    <li>Developing skills to extend and customize DL ontologies</li>
                                    <li>Case studies and hands-on experience with DL applications</li>
                                </ul>
                            </div>
                            <div class="content-block">
                                <h4>Intended Audience</h4>
                                <ul>
                                    <li>Ontology engineers and developers seeking advanced knowledge in DL</li>
                                    <li>Researchers and practitioners in the field of knowledge representation</li>
                                    <li>Information systems professionals interested in ontology reasoning</li>
                                    <li>Healthcare informatics specialists working with ontology-based systems</li>
                                    <li>Individuals interested in the theoretical and practical applications of DL</li>
                                </ul>
                            </div>
                        </div>
            </article>
        </div>
    </section>
    <section id="open-source">
        <h2>Open-Source Courses</h2>
        <p>Explore our collection of open-source training materials to enhance your skills.</p>
        <div class="siema">
            <div class="card">
                <h3><a href="http://ncorwiki.buffalo.edu/index.php/Applied_Ontology,_Spring_2022">Applied Ontology</a></h3>
                <p>Dive into applied ontology with open-source tools.</p>
            </div>
            <div class="card">
                <h3><a href="/index.php/Intelligence_Analysis:_A_Crash_Course">Intelligence Analysis: A Crash Course</a></h3>
                <p>Learn how to deploy intelligence analytics effectively using open-source software.</p>
            </div>
            <div class="card">
                <h3><a href="http://ncorwiki.buffalo.edu/index.php/Biomedical_Ontology_2016">Biomedical Ontology</a></h3>
                <p>Dive into biomedical ontology development with open-source tools.</p>
            </div>
            <div class="card">
                <h3><a href="/index.php/Ontology_of_Military_Planning_and_Operations_Assessment">Ontologies for Military Planning and Operations Assessment</a></h3>
                <p>Explore nuances of miitary planning and evaluation using Basic Formal Ontology.</p>
            </div>
            <div class="card">
                <h3><a href="http://ncorwiki.buffalo.edu/index.php/STIDS_2013">Applied Ontology for Information Sciences</a></h3>
                <p>Investigate the complexity of information modeling using ontology engineering best practices.</p>
            </div>
            <div class="card">
                <h3><a href="/index.php/Systems_Engineering_Boot_Camp">Systems Engineering Bootcamp</a></h3>
                <p>Delve into the world of systems engineering through the lens of the ontology engineer.</p>
            </div>
        </div>
        <button class="prev">Previous</button>
        <button class="next">Next</button>
    </section>
    </main>
<script src="https://cdn.jsdelivr.net/npm/siema@1.5.1/dist/siema.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        let mySiema = new Siema({
            selector: '.siema',
            duration: 200,
            easing: 'ease-out',
            perPage: { 768: 2, 1024: 3 },
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: true,
        });
        document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
        document.querySelector('.next').addEventListener('click', () => mySiema.next());
        document.querySelectorAll('.dropdown .arrow').forEach(function(arrow) {
            arrow.addEventListener('click', function(event) {
                this.closest('.dropdown').classList.toggle('dropdown-active');
            });
        });
    });
</script>
</body>
</html>
