"use client";

import Image from "next/image";

export const MembershipPortal = () => {
  return (
    <div className="space-y-24">
      <div className="grid grid-cols-2">
        <div className="flex flex-col text-md font-medium gap-1 w-3/4">
          <h3>APP OVERVIEW</h3>
          <p className="text-xs font-light">
            The fundamental goal of the membership portal is to serve as a platform for students to engage with us and manage their membership. Previously, members were tracked through a spreadsheet downloaded from Showpass, an event management app similar to ticket master. However, they took a large % of revenue from each purchase which was an unnecessary cost that could be avoided. Additionally, membership signups were independent from event sign ups, so our team would have to manually cross reference spreadsheets to determine if people who signed up for an event were actually members.
          </p>
        </div>
        <div className="flex flex-col text-md font-medium gap-1 w-3/4">
          <h3>OPPORTUNITY</h3>
          <p className="text-xs font-light">
            This inefficiency in our system was an opportunity for our development team to build a solution that streamlined membership management and event signups. By integrating these processes into a single platform, we aimed to reduce manual work, eliminate revenue loss from third-party platforms, and provide a seamless experience for both members and administrators.
          </p>
        </div>
      </div>

      <div className="-mx-40 w-screen h-96 bg-clip-border">
        <Image
          src="/img/ma/ma-banner.jpg"
          width={2000}
          height={2000}
          className="self-center w-full h-full object-cover"
          alt="Header"
        />
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col text-md font-medium gap-1 w-3/4">
          <h3>TECH STACK</h3>
          <p className="text-xs font-light">
            The app was built using a modern tech stack to ensure scalability and ease of development. The frontend was developed with React and Next.js, utilizing ShadCN for component scaffolding and styling. For the backend, we leveraged Firebase as our Backend-as-a-Service (BaaS), which provided authentication, real-time database, and cloud storage capabilities. This combination allowed us to rapidly prototype and focus on a simplified user experience. Payments were handled through Stripe for its compatibility with Firebase, developer-friendly integration, and universal payment options such as credit card and Apple pay.
          </p>
        </div>
        <div className="flex flex-col text-md font-medium gap-1 w-3/4">
          <h3>FEATURES</h3>
          <div className="text-xs font-light">
            The membership portal includes several key features:
            <ul className="list-disc list-outside ml-4 mt-2">
              <li>Authentication system to securely manage member access.</li>
              <li>
              A job portal that connects members to marketing-related
              internships and opportunities.
              </li>
              <li>
              A member network to facilitate connections between members,
              alumni, and senior students.
              </li>
              <li>
              An events section where members can view upcoming club events,
              filter through them, and sign up for participation.
              </li>
              <li>
              An admin dashboard to analyze membership demographics, track
              revenues from events and sign-ups, and manage operations.
              </li>
              <li>
              Event creation through a user-friendly form and event check-in
              functionality using data tables.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="-mx-40 w-screen h-[40rem]">
        <Image
          src="/img/ma/portal-screenshots.webp"
          width={2000}
          height={2000}
          className="self-center w-full h-full object-cover"
          alt="Header"
        />
      </div>
      
    </div>
  );
};
