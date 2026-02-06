import { Injectable } from '@angular/core';
import { Subject, TableOfContentsItem } from '../models/subject.model';

@Injectable({
    providedIn: 'root'
})
export class SubjectsService {

    private readonly subjects: Subject[] = [
        {
            id: 'programming',
            title: 'Programming',
            shortTitle: 'Programming',
            icon: '💻',
            color: 'var(--color-programming)',
            hours: '100-200',
            description: `Most undergraduate CS programs start with an "introduction" to computer programming. The best versions of these courses cater not just to novices, but also to those who missed beneficial concepts and programming models while first learning to code.`,
            whyLearn: `Our standard recommendation for this content remains Structure and Interpretation of Computer Programs (SICP), which is unique in its ability to alter your fundamental beliefs about computers and programming. For those who prefer a more modern approach, we also recommend "Composing Programs" by John DeNero, which adapts SICP concepts using Python.`,
            book: {
                title: 'Composing Programs',
                url: 'https://composingprograms.com/',
                type: 'book',
                author: 'John DeNero',
                description: 'A modern take on SICP using Python, covering functional programming, data abstraction, and program design.',
                free: true
            },
            videos: {
                title: 'CS 61A: Structure and Interpretation of Computer Programs',
                url: 'https://cs61a.org/',
                type: 'course',
                author: 'UC Berkeley',
                description: 'Berkeley\'s legendary programming course, now with modern Python materials.',
                free: true
            },
            alternativeResources: [
                {
                    title: 'Structure and Interpretation of Computer Programs (SICP)',
                    url: 'https://sarabander.github.io/sicp/html/index.xhtml',
                    type: 'book',
                    free: true
                },
                {
                    title: 'How to Design Programs',
                    url: 'https://htdp.org/',
                    type: 'book',
                    free: true
                },
                {
                    title: 'Exercism',
                    url: 'https://exercism.io/',
                    type: 'website',
                    description: 'Practice programming with mentored exercises in 60+ languages.',
                    free: true
                }
            ],
            projects: [
                'Build an interpreter for a simple language',
                'Create a text adventure game',
                'Implement a graphics library using higher-order functions'
            ],
            quote: {
                text: 'Programs must be written for people to read, and only incidentally for machines to execute.',
                author: 'Harold Abelson'
            }
        },
        {
            id: 'architecture',
            title: 'Computer Architecture',
            shortTitle: 'Architecture',
            icon: '🔧',
            color: 'var(--color-architecture)',
            hours: '100-200',
            description: `Computer Architecture—sometimes called "computer systems" or "computer organization"—is an important first look at computing below the surface of software. Understanding how hardware works is essential for writing efficient, high-performance software.`,
            whyLearn: `In our experience, it's the most neglected area among self-taught software engineers. Hardware is the platform on which all software runs, and understanding it gives you superpowers for optimization and debugging.`,
            book: {
                title: 'Computer Systems: A Programmer\'s Perspective (4th Edition)',
                url: 'http://csapp.cs.cmu.edu/',
                type: 'book',
                author: 'Bryant & O\'Hallaron',
                description: 'The definitive book on how computer systems execute programs, updated for modern architectures including ARM and RISC-V.',
                free: false
            },
            videos: {
                title: 'Nand2Tetris',
                url: 'https://www.nand2tetris.org/',
                type: 'course',
                author: 'Noam Nisan & Shimon Schocken',
                description: 'Build a complete computer from NAND gates to Tetris.',
                free: true
            },
            alternativeResources: [
                {
                    title: 'Computer Organization and Design: RISC-V Edition',
                    url: 'https://www.amazon.com/Computer-Organization-Design-RISC-V-Architecture/dp/0128203315',
                    type: 'book',
                    author: 'Patterson & Hennessy'
                },
                {
                    title: 'CS61C: Great Ideas in Computer Architecture',
                    url: 'https://cs61c.org/',
                    type: 'course',
                    free: true
                }
            ],
            projects: [
                'Complete the Nand2Tetris projects (build a computer from scratch)',
                'Write a simple assembler',
                'Implement a cache simulator'
            ],
            quote: {
                text: 'Hardware is the platform.',
                author: 'Mike Acton'
            }
        },
        {
            id: 'algorithms',
            title: 'Algorithms and Data Structures',
            shortTitle: 'Algorithms',
            icon: '🧮',
            color: 'var(--color-algorithms)',
            hours: '100-200',
            description: `We agree with decades of common wisdom that familiarity with common algorithms and data structures is one of the most empowering aspects of a computer science education. This is also a great place to train one's general problem-solving abilities.`,
            whyLearn: `Algorithms are the heart of computer science. They provide the foundation for solving complex problems efficiently and are essential for technical interviews at top companies.`,
            book: {
                title: 'The Algorithm Design Manual (3rd Edition)',
                url: 'https://www.algorist.com/',
                type: 'book',
                author: 'Steven Skiena',
                description: 'Updated for 2020s with modern examples and new chapters on machine learning algorithms.',
                free: false
            },
            videos: {
                title: 'Algorithms Specialization',
                url: 'https://www.coursera.org/specializations/algorithms',
                type: 'course',
                author: 'Tim Roughgarden (Stanford)',
                description: 'Comprehensive four-course specialization covering all fundamental algorithms.',
                free: true
            },
            alternativeResources: [
                {
                    title: 'Introduction to Algorithms (CLRS) 4th Edition',
                    url: 'https://mitpress.mit.edu/books/introduction-algorithms-fourth-edition',
                    type: 'book'
                },
                {
                    title: 'Algorithms by Jeff Erickson',
                    url: 'https://jeffe.cs.illinois.edu/teaching/algorithms/',
                    type: 'book',
                    free: true
                },
                {
                    title: 'LeetCode',
                    url: 'https://leetcode.com/',
                    type: 'website',
                    description: 'Practice algorithmic problems with solutions and discussions.'
                }
            ],
            projects: [
                'Solve 100 LeetCode problems across different difficulty levels',
                'Implement a graph algorithm visualizer',
                'Build a pathfinding demo using A* algorithm'
            ],
            quote: {
                text: 'I have only one method that I recommend extensively—it\'s called think before you write.',
                author: 'Richard Hamming'
            }
        },
        {
            id: 'math',
            title: 'Mathematics for Computer Science',
            shortTitle: 'Math for CS',
            icon: '📐',
            color: 'var(--color-math)',
            hours: '100-200',
            description: `In some ways, computer science is an overgrown branch of applied mathematics. While many software engineers try to ignore this, embracing it will give you an enormous competitive advantage.`,
            whyLearn: `Discrete mathematics, probability, and linear algebra form the theoretical foundation for everything from algorithms to machine learning. You can't truly understand AI without understanding the math behind it.`,
            book: {
                title: 'Mathematics for Computer Science',
                url: 'https://courses.csail.mit.edu/6.042/spring23/mcs.pdf',
                type: 'book',
                author: 'Lehman, Leighton & Meyer',
                description: 'MIT\'s comprehensive textbook covering logic, proofs, number theory, probability, and graph theory.',
                free: true
            },
            videos: {
                title: '6.042J Mathematics for Computer Science',
                url: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
                type: 'course',
                author: 'MIT OpenCourseWare',
                description: 'Full lecture videos from MIT covering all essential discrete math topics.',
                free: true
            },
            alternativeResources: [
                {
                    title: 'Discrete Mathematics: An Open Introduction',
                    url: 'https://discrete.openmathbooks.org/',
                    type: 'book',
                    free: true
                },
                {
                    title: 'Essence of Linear Algebra',
                    url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab',
                    type: 'video',
                    author: '3Blue1Brown',
                    free: true
                },
                {
                    title: 'Linear Algebra Done Right',
                    url: 'https://linear.axler.net/',
                    type: 'book',
                    author: 'Sheldon Axler'
                }
            ],
            projects: [
                'Implement RSA encryption from scratch',
                'Build a probability simulation tool',
                'Create a linear algebra calculator'
            ],
            quote: {
                text: 'If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.',
                author: 'John von Neumann'
            }
        },
        {
            id: 'operating-systems',
            title: 'Operating Systems',
            shortTitle: 'Operating Systems',
            icon: '⚙️',
            color: 'var(--color-os)',
            hours: '100-200',
            description: `Operating systems manage all of your computer's resources and are the foundation for everything you run. Understanding them is crucial for debugging performance issues and writing efficient systems software.`,
            whyLearn: `Most of the code we write runs on top of an operating system. Understanding how processes, memory, and I/O really work at the OS level makes you a much better programmer.`,
            book: {
                title: 'Operating Systems: Three Easy Pieces',
                url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/',
                type: 'book',
                author: 'Remzi Arpaci-Dusseau',
                description: 'A free, readable, and modern book covering virtualization, concurrency, and persistence.',
                free: true
            },
            videos: {
                title: 'CS 162: Operating Systems and System Programming',
                url: 'https://www.youtube.com/playlist?list=PLF2K2xZjNEf97A_uBCwEl61sdxWVP7VWC',
                type: 'course',
                author: 'UC Berkeley',
                description: 'Berkeley\'s famous OS course with lectures by John Kubiatowicz.',
                free: true
            },
            alternativeResources: [
                {
                    title: 'Linux Kernel Development (3rd Edition)',
                    url: 'https://www.amazon.com/Linux-Kernel-Development-Robert-Love/dp/0672329468',
                    type: 'book',
                    author: 'Robert Love'
                },
                {
                    title: 'xv6: A Simple Unix-like Teaching Operating System',
                    url: 'https://pdos.csail.mit.edu/6.828/2023/xv6.html',
                    type: 'course',
                    free: true
                }
            ],
            projects: [
                'Implement a shell from scratch',
                'Build a simple thread library',
                'Add a new system call to xv6'
            ],
            quote: {
                text: 'Any sufficiently complicated concurrent program contains an ad hoc, informally-specified, bug-ridden, slow implementation of half of message passing.',
                author: 'Rob Pike'
            }
        },
        {
            id: 'networking',
            title: 'Computer Networking',
            shortTitle: 'Networking',
            icon: '🌐',
            color: 'var(--color-networking)',
            hours: '100-200',
            description: `Given that so much of software engineering involves networked applications, one of the most immediately valuable areas of computer science is computer networking. Understanding protocols and distributed communication is essential.`,
            whyLearn: `Every modern application communicates over a network. Understanding how data flows from your code to servers around the world will help you debug issues and design better systems.`,
            book: {
                title: 'Computer Networking: A Top-Down Approach (8th Edition)',
                url: 'https://gaia.cs.umass.edu/kurose_ross/index.php',
                type: 'book',
                author: 'Kurose & Ross',
                description: 'The standard networking textbook, updated with coverage of SDN, 5G, and modern protocols.',
                free: false
            },
            videos: {
                title: 'Introduction to Computer Networking',
                url: 'https://www.youtube.com/playlist?list=PLoCMsyE1cvdWKsLVyf6cPwCLDIZnOj0NS',
                type: 'course',
                author: 'Stanford',
                description: 'Stanford\'s comprehensive networking course.',
                free: true
            },
            alternativeResources: [
                {
                    title: 'High Performance Browser Networking',
                    url: 'https://hpbn.co/',
                    type: 'book',
                    author: 'Ilya Grigorik',
                    free: true
                },
                {
                    title: 'Beej\'s Guide to Network Programming',
                    url: 'https://beej.us/guide/bgnet/',
                    type: 'book',
                    free: true
                },
                {
                    title: 'Wireshark Labs',
                    url: 'http://www-net.cs.umass.edu/wireshark-labs/',
                    type: 'website',
                    free: true
                }
            ],
            projects: [
                'Build a simple HTTP server from scratch',
                'Implement a chat application with WebSockets',
                'Create a network packet analyzer'
            ],
            quote: {
                text: 'You can\'t gaze in the crystal ball and see the future. What the Internet is going to be in the future is what society makes it.',
                author: 'Bob Kahn'
            }
        },
        {
            id: 'databases',
            title: 'Databases',
            shortTitle: 'Databases',
            icon: '🗄️',
            color: 'var(--color-databases)',
            hours: '100-200',
            description: `It takes more work to self-learn about database systems than most other topics. Understanding how databases work internally will make you a much better database user and system designer.`,
            whyLearn: `Data is at the heart of almost every application. Understanding how databases store, retrieve, and manage data efficiently is essential for building scalable systems.`,
            book: {
                title: 'Designing Data-Intensive Applications',
                url: 'https://dataintensive.net/',
                type: 'book',
                author: 'Martin Kleppmann',
                description: 'The modern bible for understanding data systems, covering everything from storage engines to distributed data.',
                free: false
            },
            videos: {
                title: 'CS 186: Introduction to Database Systems',
                url: 'https://www.youtube.com/user/CS186Berkeley/videos',
                type: 'course',
                author: 'UC Berkeley (Joe Hellerstein)',
                description: 'Berkeley\'s comprehensive database course covering relational systems, query optimization, and more.',
                free: true
            },
            alternativeResources: [
                {
                    title: 'Architecture of a Database System',
                    url: 'https://dsf.berkeley.edu/papers/fntdb07-architecture.pdf',
                    type: 'paper',
                    free: true
                },
                {
                    title: 'Readings in Database Systems (Red Book)',
                    url: 'http://www.redbook.io/',
                    type: 'book',
                    free: true
                },
                {
                    title: 'CMU 15-445: Database Systems',
                    url: 'https://15445.courses.cs.cmu.edu/',
                    type: 'course',
                    author: 'Andy Pavlo',
                    free: true
                }
            ],
            projects: [
                'Build a simple key-value store',
                'Implement a B-tree from scratch',
                'Create a SQL query parser'
            ],
            quote: {
                text: 'Data is a precious thing and will last longer than the systems themselves.',
                author: 'Tim Berners-Lee'
            }
        },
        {
            id: 'languages',
            title: 'Languages and Compilers',
            shortTitle: 'Compilers',
            icon: '📝',
            color: 'var(--color-compilers)',
            hours: '100-200',
            description: `Most programmers learn languages, whereas most computer scientists learn about languages. Understanding how programming languages work gives you the ability to learn new languages quickly and deeply.`,
            whyLearn: `If you understand compilers and language design, you gain insight into why languages are the way they are. This makes you a better programmer regardless of the language you use.`,
            book: {
                title: 'Crafting Interpreters',
                url: 'https://craftinginterpreters.com/',
                type: 'book',
                author: 'Robert Nystrom',
                description: 'Build two interpreters from scratch: a tree-walk interpreter in Java and a bytecode VM in C.',
                free: true
            },
            videos: {
                title: 'Compilers Course',
                url: 'https://www.edx.org/course/compilers',
                type: 'course',
                author: 'Alex Aiken (Stanford)',
                description: 'Stanford\'s comprehensive compiler course covering lexing, parsing, and code generation.',
                free: true
            },
            alternativeResources: [
                {
                    title: 'Compilers: Principles, Techniques & Tools (Dragon Book)',
                    url: 'https://www.amazon.com/Compilers-Principles-Techniques-Tools-2nd/dp/0321486811',
                    type: 'book',
                    author: 'Aho, Lam, Sethi, Ullman'
                },
                {
                    title: 'Writing An Interpreter In Go',
                    url: 'https://interpreterbook.com/',
                    type: 'book',
                    author: 'Thorsten Ball'
                }
            ],
            projects: [
                'Build a Lox interpreter (from Crafting Interpreters)',
                'Create a simple Lisp interpreter',
                'Implement a parser for a custom DSL'
            ],
            quote: {
                text: 'Don\'t be a boilerplate programmer. Instead, build tools for users and other programmers.',
                author: 'Ras Bodik'
            }
        },
        {
            id: 'distributed-systems',
            title: 'Distributed Systems',
            shortTitle: 'Distributed',
            icon: '🔀',
            color: 'var(--color-distributed)',
            hours: '100-200',
            description: `As computers have increased in number, they have also spread. It's typical now for even small applications to run across multiple machines. Distributed systems is the study of how to reason about the trade-offs involved.`,
            whyLearn: `Every modern application of significant scale is distributed. Understanding the fundamental trade-offs of distributed computing is essential for building reliable, scalable systems.`,
            book: {
                title: 'Designing Data-Intensive Applications',
                url: 'https://dataintensive.net/',
                type: 'book',
                author: 'Martin Kleppmann',
                description: 'The essential guide to understanding distributed data systems and the trade-offs they make.',
                free: false
            },
            videos: {
                title: 'MIT 6.5840: Distributed Systems',
                url: 'https://pdos.csail.mit.edu/6.824/',
                type: 'course',
                author: 'MIT (Robert Morris)',
                description: 'MIT\'s legendary distributed systems course covering MapReduce, Raft, and more.',
                free: true
            },
            alternativeResources: [
                {
                    title: 'Distributed Systems (3rd Edition)',
                    url: 'https://www.distributed-systems.net/index.php/books/ds4/',
                    type: 'book',
                    author: 'Tanenbaum & Van Steen',
                    free: true
                },
                {
                    title: 'Papers We Love',
                    url: 'https://paperswelove.org/',
                    type: 'website',
                    description: 'Community around reading and discussing distributed systems papers.',
                    free: true
                }
            ],
            projects: [
                'Implement the Raft consensus algorithm',
                'Build a distributed key-value store',
                'Create a simple MapReduce framework'
            ],
            quote: {
                text: 'A distributed system is one in which the failure of a computer you didn\'t even know existed can render your own computer unusable.',
                author: 'Leslie Lamport'
            }
        },
        {
            id: 'machine-learning',
            title: 'Machine Learning & AI',
            shortTitle: 'ML & AI',
            icon: '🤖',
            color: 'var(--color-ml)',
            hours: '150-300',
            description: `Machine learning has transitioned from an academic curiosity to the most transformative technology of our time. Understanding the fundamentals is now essential for every software engineer, not just ML specialists.`,
            whyLearn: `AI is reshaping every industry. Whether you're building AI-powered features or just working with AI tools, understanding how machine learning actually works gives you superpowers in the modern tech landscape.`,
            book: {
                title: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (3rd Edition)',
                url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/',
                type: 'book',
                author: 'Aurélien Géron',
                description: 'Practical ML with updated coverage of transformers, diffusion models, and modern deep learning.',
                free: false
            },
            videos: {
                title: 'CS229: Machine Learning',
                url: 'https://cs229.stanford.edu/',
                type: 'course',
                author: 'Stanford (Andrew Ng)',
                description: 'The foundational ML course that has launched countless careers.',
                free: true
            },
            alternativeResources: [
                {
                    title: 'Deep Learning',
                    url: 'https://www.deeplearningbook.org/',
                    type: 'book',
                    author: 'Goodfellow, Bengio, Courville',
                    free: true
                },
                {
                    title: 'fast.ai Practical Deep Learning',
                    url: 'https://course.fast.ai/',
                    type: 'course',
                    author: 'Jeremy Howard',
                    free: true
                },
                {
                    title: 'Neural Networks: Zero to Hero',
                    url: 'https://karpathy.ai/zero-to-hero.html',
                    type: 'video',
                    author: 'Andrej Karpathy',
                    free: true
                },
                {
                    title: 'Transformers from Scratch',
                    url: 'https://e2eml.school/transformers.html',
                    type: 'course',
                    free: true
                }
            ],
            projects: [
                'Build a transformer from scratch',
                'Fine-tune a large language model for a specific task',
                'Create an end-to-end ML pipeline with proper evaluation'
            ],
            quote: {
                text: 'Machine learning is the science of getting computers to learn without being explicitly programmed.',
                author: 'Arthur Samuel'
            },
            isNew: true
        },
        {
            id: 'security',
            title: 'Security & Cryptography',
            shortTitle: 'Security',
            icon: '🔐',
            color: 'var(--color-security)',
            hours: '100-200',
            description: `Security vulnerabilities can destroy companies and lives. Every software engineer needs to understand the fundamentals of cryptography and secure system design, not just security specialists.`,
            whyLearn: `With increasing cyber threats and privacy regulations, security is no longer optional. Understanding how to build secure systems from the ground up is essential for professional software development.`,
            book: {
                title: 'Serious Cryptography (2nd Edition)',
                url: 'https://nostarch.com/seriouscrypto2e',
                type: 'book',
                author: 'Jean-Philippe Aumasson',
                description: 'Practical cryptography for developers, covering modern primitives and post-quantum cryptography.',
                free: false
            },
            videos: {
                title: 'CS 161: Computer Security',
                url: 'https://cs161.org/',
                type: 'course',
                author: 'UC Berkeley',
                description: 'Comprehensive security course covering memory safety, cryptography, web security, and more.',
                free: true
            },
            alternativeResources: [
                {
                    title: 'Cryptography I',
                    url: 'https://www.coursera.org/learn/crypto',
                    type: 'course',
                    author: 'Dan Boneh (Stanford)',
                    free: true
                },
                {
                    title: 'The Web Application Hacker\'s Handbook',
                    url: 'https://portswigger.net/web-security',
                    type: 'book'
                },
                {
                    title: 'PortSwigger Web Security Academy',
                    url: 'https://portswigger.net/web-security/learning-path',
                    type: 'course',
                    free: true
                },
                {
                    title: 'Cryptopals Crypto Challenges',
                    url: 'https://cryptopals.com/',
                    type: 'website',
                    free: true
                }
            ],
            projects: [
                'Complete the Cryptopals challenges',
                'Build a secure password manager',
                'Conduct a security audit of your own project'
            ],
            quote: {
                text: 'Security is always excessive until it\'s not enough.',
                author: 'Robbie Sinclair'
            },
            isNew: true
        },
        {
            id: 'cloud-devops',
            title: 'Cloud & DevOps',
            shortTitle: 'Cloud/DevOps',
            icon: '☁️',
            color: 'var(--color-cloud)',
            hours: '100-200',
            description: `Modern software development is inseparable from cloud infrastructure and DevOps practices. Understanding how to deploy, scale, and operate software in production is essential for any professional developer.`,
            whyLearn: `The days of "throwing code over the wall" to ops are over. Modern developers need to understand the full lifecycle of software, from development through deployment and monitoring.`,
            book: {
                title: 'Site Reliability Engineering',
                url: 'https://sre.google/books/',
                type: 'book',
                author: 'Google',
                description: 'Google\'s guide to building and running reliable production systems at scale.',
                free: true
            },
            videos: {
                title: 'DevOps with Docker and Kubernetes',
                url: 'https://devopswithdocker.com/',
                type: 'course',
                author: 'University of Helsinki',
                description: 'Practical course covering containers, orchestration, and CI/CD.',
                free: true
            },
            alternativeResources: [
                {
                    title: 'The DevOps Handbook (2nd Edition)',
                    url: 'https://itrevolution.com/product/the-devops-handbook-second-edition/',
                    type: 'book',
                    author: 'Kim, Humble, Debois, Willis, Forsgren'
                },
                {
                    title: 'Kubernetes Up & Running (3rd Edition)',
                    url: 'https://www.oreilly.com/library/view/kubernetes-up-and/9781098110192/',
                    type: 'book'
                },
                {
                    title: 'AWS Cloud Practitioner Essentials',
                    url: 'https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/',
                    type: 'course',
                    free: true
                },
                {
                    title: 'Terraform: Up & Running (3rd Edition)',
                    url: 'https://www.terraformupandrunning.com/',
                    type: 'book',
                    author: 'Yevgeniy Brikman'
                }
            ],
            projects: [
                'Deploy an application with Kubernetes from scratch',
                'Build a complete CI/CD pipeline',
                'Set up infrastructure as code for a multi-environment application'
            ],
            quote: {
                text: 'DevOps is not a goal, but a never-ending process of continual improvement.',
                author: 'Jez Humble'
            },
            isNew: true
        }
    ];

    getSubjects(): Subject[] {
        return this.subjects;
    }

    getSubjectById(id: string): Subject | undefined {
        return this.subjects.find(s => s.id === id);
    }

    getTableOfContents(): TableOfContentsItem[] {
        return this.subjects.map(s => ({
            id: s.id,
            title: s.title,
            shortTitle: s.shortTitle,
            icon: s.icon,
            color: s.color,
            isNew: s.isNew
        }));
    }

    getCoreSubjects(): Subject[] {
        return this.subjects.filter(s => !s.isNew);
    }

    getNewSubjects(): Subject[] {
        return this.subjects.filter(s => s.isNew);
    }
}
