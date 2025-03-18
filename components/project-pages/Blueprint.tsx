"use client";

import Image from "next/image";

export const Blueprint = () => {
  return (
    <div className="space-y-24">
      <div className="grid grid-cols-2">
        <div className="flex flex-col text-md font-medium gap-1 w-3/4">
          <h3>PROJECT OVERVIEW</h3>
          <p className="text-xs font-light">
            This project was spread across 3 months of intensive planning by
            developers and project managers. Our goal was to elevate the
            experience of attendees attending our event through a novel and
            innovative experience that you could not find anywhere else. We
            aimed to exceed the expectations set for us as a student-run
            organization by building a large-scale product that had real-world
            impact.
          </p>
        </div>
        <div className="flex flex-col text-md font-medium gap-1 w-3/4">
          <h3>INNOVATION</h3>
          <p className="text-xs font-light">
            This project focused on creating a never-before-seen conference
            experience, giving each attendee a personalized account on a
            cloud-based web application that enabled quick and seamless
            networking. The web app features personalized profiles, venue maps,
            an achievement system, and a connection journal that allows
            attendees to track their journey throughout the event.
          </p>
        </div>
      </div>

      <div className="-mx-40 w-screen h-96 bg-clip-border">
        <Image
          src="/img/blueprint/panel-header.webp"
          width={2000}
          height={1000}
          className="self-center w-full h-full object-cover"
          alt="Header"
        />
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col text-md font-medium gap-1 w-3/4">
          <h3>BLUEPRINT - GETTING YOUR START</h3>
          <p className="text-xs font-light">
            First introduced in 2017, BluePrint is UBC BizTech&apos;s flagship
            conference designed to empower students with the tools and
            connections they need to thrive in the tech industry. It is known as
            UBC&apos;s largest technology conference, boasting 200+ attendees
            and 80+ delegates, and attracting 40+ companies from the likes of
            Google, Tesla, and Meta annually. This year&apos;s theme revolved
            around “Getting Your Start”, where our goal was to help
            student&apos;s put their first step forward into the world of
            technology.
          </p>
        </div>
        <div className="flex flex-col text-md font-medium gap-1 w-3/4">
          <h3>SITUATION</h3>
          <p className="text-xs font-light">
            The question was: <i> how do we innovate? </i> Previous iterations
            of Blueprint had seen &quot;gamified&quot; networking, where
            attendees had been rewarded for scanning the QR codes of partners
            through points towards raffle prizes. However, we wanted to get rid
            of the superficiality of students only talking with delegates to
            gather more points. We also wanted to polish the networking
            experience by eliminating the common pain points associated with
            networking.
          </p>
        </div>
      </div>

      <div className="bg-white/[0.07] h-fit w-screen -mx-40 rounded-lg py-16 px-24 space-y-24">
        <div className="grid grid-cols-2 gap-16">
          <Image
            src="/img/blueprint/pain-points.png"
            height={320}
            width={640}
            className="self-center"
            alt="Pain points"
          />
          <div className="flex flex-col gap-1 justify-center">
            <h3>RESEARCH + INSIGHTS</h3>
            <p className="text-xs font-light">
              We wanted to uncover how people really felt about networking
              conferences to unveil insights about how we can improve them. In a
              survey done with 100 previous attendees, we discovered that the
              issue is not just <i> forming </i> these connections, but also{" "}
              <i> maintaining </i> them long after the event is over. On top of
              this, students felt as though it was difficult to navigate the
              overwhelming atmosphere of these events while having these
              conversations.
            </p>
          </div>
        </div>
        <Image
          src="/img/blueprint/current-user-journey.png"
          height={640}
          width={1280}
          className="self-center"
          alt="Current user journey"
        />
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col text-md font-regular gap-2 w-4/5">
          <h3>PROBLEM STATEMENT</h3>
          <p className="text-2xl font-medium tracking-tight">
            Conference attendees come to BluePrint to make meaningful
            connections but have trouble remembering who they have talked to and
            where to find them. This leaves negative sentiment towards
            conferences and networking events, but also leaves an opportunity
            for us to innovate.
          </p>
        </div>
        <div className="flex flex-col text-md font-regular gap-2 w-4/5">
          <h3>FRAMING A SOLUTION</h3>
          <p className="text-2xl font-medium tracking-tight">
            How might we foster the connections between attendees and delegates
            made at BluePrint and highlight their personal growth through the
            event long after it has concluded?
          </p>
        </div>
      </div>

      <div className="bg-white/[0.07] h-fit w-screen -mx-40 px-24 py-16">
        <Image
          src="/img/blueprint/revised-user-journey.png"
          height={640}
          width={1280}
          className="self-center"
          alt="Pain points"
        />
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col text-md font-medium gap-1 w-3/4">
          <h3>OUR SOLUTION</h3>
          <p className="text-sm font-light">
            Our team of six developers, one project manager, and myself built a
            mobile web app that generates BluePrint user profiles upon event
            registration for each conference attendee and delegate, and designed
            a system that keeps track of &quot;connections&quot;, which we
            defined as everyone who visits your profile and everyone whose
            profile you have visited.
          </p>
        </div>

        <Image
          src="/img/blueprint/home+profile.png"
          height={640}
          width={1280}
          className="self-center"
          alt="App prototype designs"
        />
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col text-md font-medium gap-1 w-3/4">
          <h3>LEVERAGING NFC TECHNOLOGY</h3>
          <p className="text-sm font-light">
            We wanted our solution to be functional, easy to use, but still come
            with a <i> wow-factor </i> that gets people talking - NFC technology
            presented an opportunity to do all three of those. Each attendees
            nametag came with an NFC card inside, and by holding your mobile
            device up to someone&apos;s nametag you instantly gained access to
            their profile which had their LinkedIn, company, and fun facts about
            them. Any tap interaction between two people would be counted as a
            connection, and party A would appear in party B&apos;s connections
            journal (and vice versa).
          </p>
        </div>

        <div className="flex h-48 md:h-[32rem] w-full">
          <video
            autoPlay
            muted
            loop
            disableRemotePlayback
            playsInline
            className="pointer-events-none touch-none select-none w-full h-auto object-cover group-hover:scale-105 transition-all duration-500"
            controlsList="noplaybackrate nodownload nofullscreen"
            disablePictureInPicture
          >
            <source src="/img/blueprint/blueprint-animation.webm" />
            <p>Your browser does not support HTML video</p>
          </video>
        </div>
      </div>

      <div className="-mx-40 w-screen h-auto bg-clip-border px-6">
        <Image
          src="/img/blueprint/wireframes.webp"
          width={2000}
          height={1000}
          className="self-center w-full h-full object-cover"
          alt="Header"
        />
      </div>

      <div className="lg:-mx-40 -mx-6 w-screen h-auto bg-clip-border lg:px-6 px-2">
        <Image
          src="/img/blueprint/wrapped.webp"
          width={2000}
          height={1000}
          className="self-center w-full h-full object-cover"
          alt="Header"
        />
      </div>


      <div className="-mx-40 w-screen h-auto bg-clip-border">
        <Image
          src="/img/blueprint/blueprint-collage.webp"
          width={2000}
          height={1000}
          className="self-center w-full h-full object-cover"
          alt="Header"
        />
      </div>

      <div className="tracking-tight text-md md:text-xl font-regular">
          BluePrint 2025 was a resounding success, with over 200 attendees and
          80 delegates, and 40+ companies in attendance. The NFC technology
          proved to be a hit, with attendees raving about how easy it was to
          connect with others and how they could easily remember who they had
          talked to. The connections journal had resounding success, with attendees
          appreciating the ability to look back at who they had met and what
          they had talked about.
      </div>

      

    </div>
  );
};
