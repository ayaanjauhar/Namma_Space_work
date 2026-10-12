# Project Icarus — Namma Space

**Techfest 2026–27 | Team of 4 | Team Leader: Ayaan Jauhar**

## What is Namma Space?

Namma Space is a challenge to turn photos or videos of a real indoor place into an interactive 3D model.

Imagine scanning a room, opening it in a browser, walking around it virtually, searching for a room or item, and seeing a path to reach it without walking through walls or furniture.

## What do we need to build?

1. **Capture a space** using a smartphone, photos, video, floor plans or sensor data.
2. **Create a 3D model** of that space without manually modelling everything.
3. **Build a web viewer** where people can explore the model using WASD keys and the mouse.
4. **Add points of interest (POIs)** such as Reception, Meeting Room A or a particular sofa.
5. **Add search and navigation** so users can find a destination and see a walkable route around obstacles.
6. **AR navigation is a bonus:** arrows can guide someone through the real building using their phone camera.

## The three rounds

### Round 1 — 3D model and walkthrough

**Deadline: 31 October 2026**

Scan your own home or another accessible indoor space, make a 3D model and create a browser-based walkthrough.

Submit:
- A technical abstract PDF (maximum 5 pages).
- A document with a working web viewer link.
- A 3–5 minute demo video showing the capture process and walkthrough.
- A code repository with setup instructions and sample data in a test folder.

Judges assess the capture process, 3D model quality, web viewer performance and documentation.

### Round 2 — Search and navigation

**Deadline: 30 November 2026**

Add labelled POIs, search and desktop pathfinding.

Submit:
- An updated code repository link showing the POI and navigation work.
- A live web app link.
- A 3–5 minute demo video showing search, POI interaction and paths around obstacles.

Judges assess POI tagging, pathfinding accuracy, search experience and code/repository quality.

**Desktop navigation is required. AR does not replace it.**

### Round 3 — Live finale at IIT Bombay

**16–17 December 2026**

Qualifying teams will be assigned a new venue on campus. They must capture it, reconstruct it, label POIs and deploy the platform within the given time.

- **16 December:** Capture and process the venue.
- **17 December:** Give a 10-minute live presentation and demo, followed by 5 minutes of technical Q&A.

The key test is whether the system can work on a new place, not only on a model prepared earlier.

## Round 3 scoring

| Category | Weight |
|---|---:|
| Capture SOP and field capture | 20% |
| 3D reconstruction and visual quality | 20% |
| Web viewer and user experience | 20% |
| Search and path calculation | 20% |
| Presentation and technical Q&A | 20% |
| AR navigation | Bonus, labelled 10% in the PDF |

The PDF does not explain exactly how the AR bonus is calculated.

## Important terms

- **3D reconstruction:** Turning photos or video into a 3D representation of a real place.
- **Digital twin:** A digital representation of a real environment.
- **SOP:** Standard Operating Procedure—a repeatable set of steps for capturing a space.
- **POI:** Point of Interest—a named room, item or location.
- **Pathfinding:** Finding a walkable route to a destination while avoiding obstacles.
- **AR:** Augmented reality—adding directions, such as arrows, over a live camera view.

A possible pathfinding method is to represent walkable areas as a graph and use an algorithm such as A*. The PDF does not require a particular algorithm.

## Key dates

| Event | Date |
|---|---|
| Registration deadline | 15 October 2026 |
| Round 1 submission | 31 October 2026 |
| Round 1 results | 10 November 2026 |
| Round 2 submission | 30 November 2026 |
| Finalists announced | 7 December 2026 |
| Round 3 capture | 16 December 2026 |
| Final presentation and Q&A | 17 December 2026 |
| Winners' prize form deadline | 31 December 2026 |
| Prize money processing | By May 2027 |

## Rules and opportunities

- Teams can have a maximum of **4 members**.
- Students must have a valid educational-institution ID.
- The work must be original.
- Open-source and third-party tools are allowed, subject to their licences. Credit them in the technical abstract.
- Submit technical questions through the Techfest Competition Portal's **Doubt** section. The PDF says email queries will not be entertained.
- Make Google Drive submissions accessible to **anyone with the link**.
- Put additional links and supplementary materials in one organised master PDF or Google Doc; loose links will not be reviewed.
- Check `techfest.org` for updates. The PDF identifies `aryan@techfest.org` for important announcements, but says email queries will not be entertained.

The top three teams in the final round receive prize money via NEFT. The PDF does not list prize amounts. Winners must submit a prize form by 31 December 2026, with account holder name, account number, bank and branch name, and IFSC code.

Participants who complete the full pipeline, including AR navigation, may be considered for a full-time job opportunity at **Juspay**. This is not a guaranteed offer.

## Technical abstract — suggested outline

The abstract must be no longer than five pages and cover the system architecture, pipeline, capture SOP and technical approach.

A simple suggested structure:
1. Problem and proposed solution.
2. System architecture.
3. Capture SOP.
4. Technical implementation.
5. Results, screenshots and limitations.

This outline is a suggestion, not an official page-by-page template.

## What the PDF does not specify

The PDF does not mandate a programming language, web framework, reconstruction tool, pathfinding algorithm or specific phone/sensor. It also does not give the prize amounts or explain the exact AR bonus calculation.


## The goal

**Round 1:** Make one real indoor space explorable in 3D.  
**Round 2:** Make it searchable and navigable.  
**Round 3:** Prove the system works on a new venue at IIT Bombay.

*Capture reality. Reconstruct the space. Make it explorable.*
