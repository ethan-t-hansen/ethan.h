"use client";

export const BizTag = () => {
  return (
    <div className="space-y-24">
      <div className="grid grid-cols-2">
        <div className="flex flex-col text-md font-medium gap-1 w-3/4">
          <h3>PLUGIN OVERVIEW</h3>
          <p className="text-xs font-light">
            This app allows users to generate nametags directly within the Figma canvas. By uploading a .csv file containing participant details, an image file for the background, and specifying the desired width and height, the app leverages Figma&apos;s API to procedurally create personalized nametags for each entry in the spreadsheet. This streamlines the design process and ensures consistency across all nametags.
          </p>
        </div>
        <div className="flex flex-col text-md font-medium gap-1 w-3/4">
          <h3>WHY THIS IS IMPORTANT</h3>
          <p className="text-xs font-light">
            Our club focuses on organizing and hosting large scale events, which translates to ~200 nametags being made on average every event. Before each event, creating these nametags manually often takes the work of 2-3 designers and takes multiple hours. By automating the process, which takes roughly 10 minutes for a single designer, the time saved for the team is significant. This efficiency enables the designers to focus on other critical aspects of event preparation, ensuring a smoother and more professional experience for attendees.
          </p>
        </div>
      </div>
      
    </div>
  );
};
