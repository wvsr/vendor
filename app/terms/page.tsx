import { IoIosSearch } from 'react-icons/io'
import Logo from '@/public/logo.png'
import ChatGpt from '@/public/chatgpt.webp'
import Image from 'next/image'

function Terms() {
  return (
    <main className='bg-black'>
      <header className='flex justify-between items-start py-2.5 px-3 border-b border-gray-900'>
        <div className='flex gap-3 w-full'>
          <div className='pt-3'>
            <Image src={Logo} alt='logo' width={200} />
          </div>
        </div>
        <div>
          <button className='btn'>Launch</button>
        </div>
      </header>

      <article className='wrapper py-5 text-[#ECECF1] max-w-3xl mx-auto space-y-12'>
        <div className='space-y-3'>
          <h1 className='text-4xl'>Security</h1>
          <p>
            Every day, thousands of people design, ship websites made in Framer.
            Your work is valuable, and we strive to ensure that your privacy and
            data are never compromised. Here are some of the measures we have in
            place. Contact us for custom enterprise security options.
          </p>
        </div>
        <div className='space-y-3'>
          <div>
            <h3 className='text-2xl'>Compliance</h3>
            <h3 className='text-base font-bold'>ISO 27001</h3>
          </div>
          <p>
            ISO 27001 is the globally accepted standard for assessing the life
            cycle of an organization’s security practices. It is a rigorous
            assessment of both risk, compliance, and governance that verifies
            that an organization has a mature, well-managed approach to
            information security. Framer has achieved ISO 27001 compliance. You
            can download our ISO 27001 certificate here. A copy of the Statement
            of Applicability is available to Enterprise customers upon request.
          </p>
        </div>
        <div className='space-y-3'>
          <div>
            <h3 className='text-2xl'>SOC 2</h3>
          </div>
          <p>
            SOC 2 is a globally recognized auditing standard for service
            organizations that demonstrates adequate controls and processes.
            Framer has successfully completed the SOC 2 Type 1 audit and the SOC
            2 Type 2 audit. Framer’s SOC 2 report covers the trust services
            principles and criteria security and availability. A copy of the
            most recent audit report is available to Enterprise customers upon
            request.
          </p>
        </div>
        <div className='space-y-3'>
          <div>
            <h3 className='text-2xl'>GDPR</h3>
          </div>
          <p>
            Framer is committed to ensuring that all our customer and employee
            personal data are treated in a way that complies with the EU’s
            General Data Protection Regulation (GDPR).
          </p>
        </div>
        <div className='space-y-3'>
          <div>
            <h3 className='text-2xl'>CCPA</h3>
          </div>
          <p>
            The California Consumer Privacy Act (“CCPA”) regulates how
            organizations handle the personal information of Californian
            residents and gives them certain rights with respect to their
            personal information. Framer is committed to be compliant with the
            CCPA. As a provider of enterprise design tools, Framer is primarily
            a service provider under the CCPA.
          </p>
        </div>
        <div className='space-y-3'>
          <div>
            <h3 className='text-2xl'>Privacy Shield</h3>
          </div>
          <p>
            As of July 16, 2020, we no longer rely on the Privacy Shield as a
            transfer mechanism for data transfers given the EU-U.S. Privacy
            Shield and Swiss-U.S. Privacy Shield are no longer valid as a result
            of the CJEU ruling in Schrems II. However, to the extent Framer has
            ongoing obligations under our existing Privacy Shield Certification,
            we will continue to honor them . Our Privacy Shield certification is
            available here.
          </p>
        </div>
        <div className='space-y-3'>
          <div>
            <h3 className='text-2xl'>Data Security</h3>
          </div>
          <p>
            All of Framer’s services are hosted in Amazon Web Services (AWS)
            facilities in the United States. Services are distributed across
            multiple AWS availability zones. These zones are hosted in
            physically separate data centers, protecting services against single
            data center failures.
          </p>
          <p>
            You can find more information about AWS security practices on their
            cloud security page .
          </p>
          <div className='space-y-2'>
            <p className='text-base font-bold'>Data classification</p>
            <p>
              Framer classifies the data they own, use, create, and maintain
              into the following categories:
            </p>
            <p>- Confidential - Customer and personal data</p>
            <p>
              - Internal - Framer-internal operational data that should not be
              disclosed
            </p>
            <p>
              - Public - For example, the marketing material and content on this
              website
            </p>
          </div>
          <div className='space-y-2'>
            <p className='text-base font-bold'>Encryption at rest</p>
            <p>
              Framer uses the AWS-managed data stores Aurora, DynamoDB,
              ElastiCache, and S3 to store customer data, including backups. All
              these AWS services have been configured to use encryption at rest
              using AES with 256-bit keys.
            </p>
          </div>
          <div className='space-y-2'>
            <p className='text-base font-bold'>
              Secrets and encryption key management
            </p>
            <p>
              Framer uses AWS Parameter Store for securely storing and managing
              secrets that are used by services. Framer uses AWS Key Management
              Service (KMS) to encrypt and decrypt these secrets as well as
              manage all encryption keys in use by Framer services. Access to
              secrets and encryption keys are restricted to the services on a
              least privilege basis and are managed by the Framer infrastructure
              team.
            </p>
          </div>
          <div className='space-y-2'>
            <p className='text-base font-bold'>Separation of environments</p>
            <p>
              Framer fully separates and isolates their production, staging, and
              development networks and environments.
            </p>
          </div>
        </div>
        <div className='space-y-3'>
          <div>
            <h3 className='text-2xl'>Product security</h3>
          </div>
          <div className='space-y-2'>
            <p className='text-base font-bold'>Secure development</p>
            <p>
              Framer practices continuous delivery. We have processes and
              automation in place that allow us to safely and reliably roll out
              changes to our cloud infrastructure and web-based applications in
              a rapid fashion. We deploy new changes to production dozens of
              times a day.
            </p>
            <p>
              - All code changes are requested through pull requests and are
              subjected to code reviews and approval prior to being merged to
              the master and production branches.
            </p>
            <p>
              - Framer uses GitHub Enterprise and Dependabot to automatically
              create pull requests to update outdated dependencies.
            </p>
            <p>
              - Framer uses static source code analysis tools like Code Climate
              to analyze any source code changes in order to identify any
              potential code quality issues or security weaknesses.
            </p>
            <p>
              - Framer uses Sentry to track errors in the web and desktop
              applications.
            </p>
            <p>
              - Framer uses SIEM technology for continuous monitoring and
              overview to our network and applications.
            </p>
            <p>
              - Framer’s security team works closely with the engineering teams
              to resolve any potential security concerns that may arise during
              design or development.
            </p>
          </div>
          <div className='space-y-2'>
            <p className='text-xl'>External security testing</p>
            <p>
              In addition to our internal security scanning and testing program,
              Framer employs third-party firms to conduct extensive penetration
              tests of all application and cloud infrastructure on a regular
              basis. Findings from these penetration tests are prioritized,
              triaged, and remediated by the Framer security team.
            </p>
          </div>
          <div className='space-y-2'>
            <p className='text-xl'>Bug bounty program</p>
            <p>
              Framer operates a private security bug bounty program that allows
              security researchers around the world to continuously test the
              security of Framer’s applications and services. Security engineers
              who identify valid issues are paid via the program. If you would
              like to be invited into our bug bounty program, please report a
              security vulnerability by following our vulnerability disclosure
              guidelines as outlined below. Based on that we will consider
              inviting you into our program, which will be determined at our
              discretion.
            </p>
          </div>
        </div>
        <div className='space-y-3'>
          <div>
            <h3 className='text-2xl'>Data Security</h3>
          </div>
          <p>
            All of Framer’s services are hosted in Amazon Web Services (AWS)
            facilities in the United States. Services are distributed across
            multiple AWS availability zones. These zones are hosted in
            physically separate data centers, protecting services against single
            data center failures.
          </p>
          <p>
            You can find more information about AWS security practices on their
            cloud security page .
          </p>
          <div className='space-y-2'>
            <p className='text-base font-bold'>Data classification</p>
            <p>
              Framer classifies the data they own, use, create, and maintain
              into the following categories:
            </p>
            <p>- Confidential - Customer and personal data</p>
            <p>
              - Internal - Framer-internal operational data that should not be
              disclosed
            </p>
            <p>
              - Public - For example, the marketing material and content on this
              website
            </p>
          </div>
          <div className='space-y-2'>
            <p className='text-base font-bold'>Encryption at rest</p>
            <p>
              Framer uses the AWS-managed data stores Aurora, DynamoDB,
              ElastiCache, and S3 to store customer data, including backups. All
              these AWS services have been configured to use encryption at rest
              using AES with 256-bit keys.
            </p>
          </div>
          <div className='space-y-2'>
            <p className='text-base font-bold'>
              Secrets and encryption key management
            </p>
            <p>
              Framer uses AWS Parameter Store for securely storing and managing
              secrets that are used by services. Framer uses AWS Key Management
              Service (KMS) to encrypt and decrypt these secrets as well as
              manage all encryption keys in use by Framer services. Access to
              secrets and encryption keys are restricted to the services on a
              least privilege basis and are managed by the Framer infrastructure
              team.
            </p>
          </div>
          <div className='space-y-3'>
            <p className='text-3xl'>Infrastructure and network security</p>
            <div className='space-y-2'>
              <p className='text-xl'>Transport security</p>
              <p>
                Framer requires the use of TLS to secure the transport of data,
                both on the internal network between services as well as the
                public network between the Framer applications and the Framer
                cloud infrastructure. Framer’s TLS configuration requires at
                least TLS version 1.2 and the use of strong cipher suites, which
                supports important security features such as Forward Secrecy. To
                defend against downgrade attacks Framer has implemented HTTP
                Strict Transport Security, and has all their production domain
                names included on the HSTS Preload List.
              </p>
            </div>
            <div className='space-y-2'>
              <p className='text-xl'>External attack surface</p>
              <p>
                Framer only exposes public (web) applications and APIs to the
                public internet. All other services are only available on the
                internal network, and accessible by employees using a VPN or
                single sign-on proxy. The external attack surface is monitored
                for changes by a third-party service.
              </p>
            </div>
            <div className='space-y-2'>
              <p className='text-xl'>Network segmentation</p>
              <p>
                Network segmentation is a foundational aspect of Framer’s cloud
                security strategy. Framer achieves segmentation boundaries at
                various layers of their cloud infrastructure. Framer uses a
                multi-account strategy within AWS to isolate production,
                development, and test environments, but also domains such as
                logging, security, and marketing. Within AWS, Framer uses VPCs,
                security groups, network access control lists, and subnets to
                further isolate services.
              </p>
            </div>
            <div className='space-y-2'>
              <p className='text-xl'>Intrusion detection and prevention</p>
              <p>
                Framer maintains an extensive centralized logging environment in
                which network, host, and application logs are collected at a
                central location. Framer has also enabled detailed audit trails
                with critical service providers like Google G Suite, GitHub, and
                AWS (CloudTrail). These logs and audit trails are analyzed by
                automated systems for security events, anomalous activity, and
                undesired behavior. These systems will generate events which are
                monitored around the clock by a security operations center
                (SOC).
              </p>
            </div>
          </div>
        </div>
        <div className='space-y-3'>
          <h3 className='text-3xl'>Organizational security</h3>
          <div className='space-y-2'>
            <p className='text-base font-bold'>Security training</p>
            <p>
              All new hires are required to attend the security awareness
              training as part of their on-boarding. And all employees are
              required to attend the annual security awareness training. Framer
              engineers are required to attend an annual security training
              designed specifically for engineers.
            </p>
          </div>
          <div className='space-y-2'>
            <p className='text-base font-bold'>Asset inventory</p>
            <p>
              Framer maintains an accurate and up-to-date inventory of all its
              networks, services, servers, and employee devices. Access to
              customer data Access to Framer customer data is provided on an
              explicit need- to-know basis and follows the principle of least
              privilege. Customer data is audited and monitored by the security
              team. Framer support and customer employees are only granted
              access after explicit approval of the respective customer. All
              Framer employees have signed a non-disclosure agreement.
            </p>
          </div>
          <div className='space-y-2'>
            <p className='text-base font-bold'>Security incident management</p>
            <p>
              The security team at Framer aggregates logs and audit trails from
              various sources at a central location and uses tools to analyze,
              monitor and flag anomalous or suspicious activity. Framer’s
              internal processes define how alerts are triaged, investigated,
              and, if needed, escalated. Both customers and non-customers are
              encouraged to disclose any potential security weaknesses or
              suspected incidents to Framer Security. In case of a serious
              security incident, Framer the security expertise to investigate
              security incidents and resolving them to closure. If needed,
              Framer has also access to external subject matter experts.
            </p>
          </div>
          <div className='space-y-2'>
            <p className='text-base font-bold'>Information security policies</p>
            <p>
              Framer maintains a number of information security policies that
              form the basis of our information security program. All Framer
              employees are required to review these policies as part of their
              on-boarding. These security policies cover the following topics
              and are available to Enterprise customers upon request:
            </p>
            <p>- Access control</p>
            <p>- Change management</p>
            <p>- Risk management</p>
            <p>- Data classification and asset inventory management</p>
            <p>- Incident response and management</p>
            <p>- Network security</p>
            <p>- Encryption and key management</p>
            <p>- Human resources security</p>
            <p>- Information transfer</p>
            <p>- Secure development</p>
            <p>- System monitoring and logging</p>
            <p>- Vendor management</p>
            <p>- Vulnerability management and malware protection</p>
            <p>- Mobile device management and remote working</p>
            <p>- Business continuity and disaster recovery</p>
          </div>
        </div>
        <div className='space-y-3'>
          <h2 className='text-3xl'>Operational security</h2>
          <div className='space-y-2'>
            <p className='text-base'>Backups and disaster recovery</p>
            <p>
              All Framer customer data is stored redundantly at multiple AWS
              data centers (availability zones) to ensure availability. Framer
              has well- tested backup and restoration procedures in place, which
              allow for quick recovery in the case of single data center
              failures and disasters. Customer data is continuously backed up
              and stored off-site. The restoration of backups are fully tested
              every 30 days to ensure that our processes and tools work as
              expected.
            </p>
          </div>
          <div className='space-y-2'>
            <p className='text-base'>Endpoint security</p>
            <p>
              Framer exclusively uses Apple MacBook devices. These devices are
              all centrally managed through the internal mobile device
              management solution, which allow us to enforce security settings
              such as full disk encryption, network and application firewall,
              automatic updates, screen time-outs, and anti-malware solutions.
              In case employee devices get stolen or lost, data on these devices
              can be remotely wiped.
            </p>
          </div>
          <div className='space-y-2'>
            <p className='text-base'>Risk management and assessment</p>
            <p>
              Framer performs a periodic risk analysis and assessment to ensure
              that our information security policies and practices meet the
              requirements and applicable regulatory obligations.
            </p>
          </div>
        </div>
        <div className='space-y-3'>
          <h1 className='text-3xl'>Enterprise security</h1>
          <p>
            Framer performs a periodic risk analysis and assessment to ensure
            that our information security policies and practices meet the
            requirements and applicable regulatory obligations.
          </p>
          <div className='space-y-2'>
            <p className='text-base font-bold'>Single sign-on (SSO)</p>
            <p>
              Framer supports single sign-on (SSO) for Enterprise customers. By
              using the customer’s existing identity management solution, Framer
              provides an easy and secure way for companies to manage their team
              members’ access. Framer supports identity providers like Google G
              Suite, Azure Active Directory, OneLogin, and Okta. Framer also
              supports both SAML and OAuth-based OpenID Connect.
            </p>
          </div>
          <div className='space-y-2'>
            <p className='text-base font-bold'>
              Role-based access control (RBAC)
            </p>
            <p>
              Framer supports role-based access control, which means the access
              of team members within an organization are dictated by their role
              (viewer, collaborator, editor, or administrator). Administrators
              can assign team members specific roles or revoke access using the
              Framer account dashboard.
            </p>
          </div>
        </div>
        <div className='space-y-3'>
          <h3 className='text-3xl'>Security vulnerability disclosure</h3>
          <p>
            If you would like to disclose a potential security vulnerability or
            have security concerns about a Framer product, please reach out to
            security@framer.com. Please include a description of the security
            vulnerability, steps to reproduce, and the impact the vulnerability
            may have. You may encrypt your messages using our PGP public key.
          </p>
        </div>
      </article>
      <footer></footer>
    </main>
  )
}

export default Terms
