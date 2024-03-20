# Vehicles

Vehicles in _Mythras Imperative_ are treated in a semi-abstract fashion. Essentially, they are background tools, used to get characters from A to B, with little need for detailed description or statistics. On occasion though, Games Masters will require details for vehicles when it is necessary to represent them in chases or combat situations.

The rules in this section allow for the representation of most kinds of vehicles but in an abstracted way that is intended to permit flexibility and enhance storytelling. Starships and space craft are a little different, although they are based on similar principles.

---
## Statistics

All vehicles are described in terms of their Structure, Hull, Speed, Systems, Traits, and Shields (if present in the setting).

- **[Size](0006_Vehicles.md?id=vehicle-size-table):** All vehicles have one of six Size ratings which determines the value or range of the rest of the characteristics. Due to their larger intrinsic size and the hostile environments of space, starships have their own range of values.
- **[Hull](0006_Vehicles.md?id=terrestrial-hulls):**  Represents Armor Points
- **[Structure](0006_Vehicles.md?id=terrestrial-hulls):**  Represents a vehicle's Hit Points
- **[Shields](0006_Vehicles.md?id=shields):**  In settings with advanced energy manipulation technology, shields may be present that protect the vehicle, but which may ablate under sustained fire.
- **[Systems](0006_Vehicles.md?id=systems):**  Representing vital components of the vehicle, including the power plant, crew section, and so on.
- **[Speed](0006_Vehicles.md?id=speed):**  Every vehicle has a basic Speed rating
- **[Traits](0006_Vehicles.md?id=traits):**  A vehicle may also have one or more Traits. Traits, like the Abilities assigned to Creatures in the _Mythras Imperative_ rules, or Combat Style Traits, offer an additional game description and advantage, reflecting the vehicle's nature.
- **[Weapons](0006_Vehicles.md?id=weapons):** Much like Traits, a vehicle may be equipped with weapons as the setting allows. Some suggested examples and values are detailed below.


---
### Hull Size, Type and Structure

The size and purpose of a vehicle affects the thickness of its hull and resilience of its internal structure. A motorcycle, for example, has a minimal hull, built as it is for speed and agility. A Land Ironclad (a massive, tracked or wheeled armored behemoth, powered by steam or diesel engines), being a much larger vehicle designed for the battlefield, has a much larger hull. The comparative sizes of hulls (and how many hits from weapons they can typically withstand), is summarized on the Vehicle Size and Hull tables below.

Whenever a vehicle suffers harm, the incoming damage is reduced by its Hull value. Any remaining damage is subtracted from the vehicle's Structure points and has a percentage chance, equal to the penetrating damage, of affecting a System. If the vehicle is ever reduced to zero Structure it is either utterly destroyed, or so badly wrecked it must be scrapped.

##### Terrestrial Hulls 

| Size | Structure | Civilian Hull Value | Military Hull Value | Example |
| :-- | :-: | :-: | :-: | :-- |
| Small | 1-20 | 1-3 | 4-6 | Motorcycle, motorcycle with sidecar, compact or subcompact car, canoe, kayak, rowboat |
| Medium | 21-40 | 1-6 | 7-9 | Sedan, panel van, pickup, luxury car, luxury sports car, muscle car, limousine, lifeboat, speedboat, hang glider, autogyro |
| Large | 41-60 | 4-9 | 10-12 | Lorry/truck, stretch limo, SUV, bus, people carrier, personal aircraft, glider, pleasure cruiser, tank, helicopter, submarine |
| Huge | 61-80 | 7-12 | 13-15 | Semi, airliner, jet, coastguard vessel, yacht |
| Enormous | 81-100 | 10-15 | 16-18 | Train, cruise liner, naval vessel |

##### Starship Hulls 

| Size | Structure | Civilian Hull Value | Military Hull Value | Example |
| :-- | :-: | :-: | :-: | :-- |
| Small | 10-50 | 4-9 | 10-12 | Single seat fighter |
| Medium | 51-150 | 7-12 | 13-15 | Light Freighter, Shuttle craft |
| Large | 151-450 | 10-15 | 16-18 | Heavy Freighter, Cruiser |
| Huge | 451-1350 | 13-18 | 19-21 | Escort Frigate, Light Battle Cruiser |
| Enormous | 1351-4050 | 16-21 | 21-24 | Generation Ship, Heavy Battle Cruiser |
| Colossal | 4050-12110 | 19-24 | 24-30 | Orbital Habitat, Planet-Busting Battle Station |


---
### Shields

Deflector shields provide an additional layer of protection for those vehicles which can mount them. Shields work slightly differently than the Hull, due to their ablative nature. If incoming damage is equal to or less than the value of the shields, then it is all blocked. If damage exceeds the shield value, then any excess reduces the shield strength by that amount.

_For example, a troop carrier has an energy shield strength of 12 points. If the carrier was hit by a laser for 11 damage, it simply does not penetrate and has no additional effect. On the other hand, if the carrier was hit by a blast inflicting 15 damage, the excess three points would drop the shield strength to 9._

Once the strength of a deflector shield has dropped to zero, it collapses. Any remaining damage carries onto the hull.

---
### Systems

Every time a vehicle suffers damage that penetrates its hull, there is a chance, equal to the penetrating damage, that a vital System has been affected. 

_For example, 10 damage is applied to Speedboat - a vehicle with 3 Hull and 24 Structure. The Hull counts as armor reducing the damage to 7. This is removed from the 24 Structure points and there is a 7% chance to damage one of the vehicle's Systems._

Depending on which system has been hit, the effects of System damage can be catastrophic.

The damage a System can sustain is based purely on the vehicle's size. This is modelled by the number of times that System is hit, rather than the actual amount of damage. A single System it on a Small vehicle will instantly destroy that System. It takes two hits to demolish a Medium sized vehicle's Systems, three for a Large vehicle, and so on. See the [System Damage Table](0006_Vehicles.md?id=system-damage-table) below.

Systems that are damaged, but not yet destroyed, suffer a loss in functionality. This is equal to the proportion of current hits to its total capability. Thus, an Enormous vehicle hit twice in the Drive would lose 40% of its power (2 hits out of a maximum of 5) and would reduce its Speed rating accordingly. For instance, a Land Ironclad with a Speed of Slow would be reduced to Ponderous. The specific effect depends on what the subsystem controls. For more detail, see the tables in the [Damage](0006_Vehicles.md?id=damage) section below.

#### Damage

Damage that exceeds the Hull penetrates the vehicle, damaging the Structure and possibly impacting on one or more systems. Depending on the size of the vehicle, damage can be minor or catastrophic.

For example, a Large vehicle may take up to two hits on a system such as its Drive. The third hit functionally destroys the Drive. Each time the system takes a hit, it either loses a percentage of its function as described in the Loss per Hit column of the System Damage Table below or a core function (such as Drive, Pilot, Comms, and so on) becomes one Difficulty Grade harder per hit sustained.

##### System Damage Table 

| Size | System Hits | Loss per Hit |
| :-- | :-: | :-- |
| Small | 1 | 100% - Destroyed |
| Medium | 2 | 1 Grade or 50% |
| Large | 3 | 1 Grade or 33% |
| Huge | 4 | 1 Grade or 25% |
| Enormous | 5 | 1 Grade or 20% |
| Colossal | 6 | 1 Grade or 16% |


<details>

<summary>* Community Errata</summary>

---

##### System Damage Table (Original) 

| Size | System Hits | Loss per Hit |
| :-- | :-: | :-- |
| Small | 1 | 1 Grade or 50% |
| Medium | 2 | 1 Grade or 33% |
| Large | 3 | 1 Grade or 25% |
| Huge | 4 | 1 Grade or 20% |
| Enormous | 5 | 1 Grade or 16% |
| Colossal | 6 | 1 Grade or 10% |

##### Vehicle Size Table (from [Hull Size, Type and Structure](0006_Vehicles.md?id=hull-size-type-and-structure))

| Size | System Hits |
| :-- | :-: |
| Small | 1 |
| Medium | 2 |
| Large | 3 |
| Huge | 4 |
| Enormous | 5 |
| Colossal | 6 |

_The original rules and examples are inconsistent:_
- _"Systems that are damaged, but not yet destroyed, suffer a loss in functionality. This is equal to the proportion of current hits to its total capability. Thus, an Enormous vehicle hit twice in the Drive would lose 40% of its power (2 hits out of a maximum of 5)"._ 
   - _This suggests the Enormous vehicle shown with 5 System Hits should lose 20% with each hit - but the table says 16%._
- _"For example, a Large vehicle may take up to three hits on a system such as its Drive. The fourth hit functionally destroys the Drive."_ 
  - _"This suggests - as does the table - 25% damage per System Hit but the Large Vehicles can only take 3 System Hits according to the same table._
- _While not inconsistent, the Vehicle Size Table was redundant; appearing again in fuller form (adding the Loss per Hit column) just a few lines later._

_This makes it hard to have a consistent rule. To address these issues, the values and examples are changed to match and the Vehicle Size Table was removed._

---

</details>

The systems at risk are listed in the Component Damage table below.

##### System Component Damage Table 

| 1d10 | System | Damaged Result | Destroyed Result |
| :-: | :-- | :-- | :-- |
| 1 | Cargo | An amount of possessions or equipment stored in the hold, proportional to the damage, are destroyed. | All cargo is destroyed. |
| 2 | Comms | Comms rolls suffer one additional Difficulty Grade of difficulty each time they are damaged. | Vehicle can no longer communicate or spoof enemy sensors. |
| 3 | Controls | Boating, Drive, or Pilot rolls suffer one additional Difficulty Grade each time they are damaged; immediate Control roll required. | Vehicle can no longer be steered or change course. |
| 4 | Drive | Speed reduced by an amount proportional to damage. | Vehicle stops dead; aircraft crash. |
| 5 | Crew | A number of passengers proportional to the damage are rendered casualties. Those affected suffer a Major Wound and must succeed in an Endurance roll or be killed instantly. | Vehicle occupants die. |
| 6 | Engine / Fuel | Maximum Speed is halved; electronic systems one Difficulty Grade more difficult to use. | Vehicle is destroyed in a disastrous explosion. |
| 7 | Sensors | Sensor, Navigation and Weapon attack rolls suffer one additional Difficulty Grade each time they are damaged. | Vehicle is rendered blind. |
| 8 | Weapons | A number of weapon systems proportional to the damage become inoperative. | Vehicle can no longer fire weapons. |
| 9-0 | None | No systems struck; just Structure damage. | N/A |

---
### Speed

Since the physics of velocity, acceleration, drag and inertia (to name but a few) are complex issues, some simplification is needed and so vehicles are given an abstract speed rating. The Speed characteristic should only be used to roughly judge if one vehicle can overtake or catch up with another.

The speed rating represents a vehicle's nominal operational rate. In emergency situations this performance can be increased by one step, at risk of wear or damage to the engines. Although the same table is used for all vehicle types, common sense should be applied so that only vehicles of the same class are compared. For example, if a Starship and a sports car both have the same acceleration rate of Rapid, then it should be obvious the spaceship is comparatively faster.

Increasing a vehicle's Speed beyond its standard value is possible on a successful Drive roll. Usually, this extra speed is only sustainable for a short period – no more than 1d6 minutes before the vehicle must drop to its standard speed or risk damage to its powerplant. A critical Drive roll allows the period of higher speed to be increased to 1d12 minutes.

A driver can attempt to push a vehicle's speed by 2 steps, but this requires a Herculean Drive roll and the maximum the vehicle can sustain this speed is 1d3 minutes: a Critical Success will not extend the increased speed's duration.

##### Speed Rating Table 

| Speed Rating | Max Speed For |
| :-- | :-: |
| Ponderous | Enormous |
| Sluggish | |
| Slow | Huge |
| Mediocre | |
| Gentle | Large |
| Moderate | |
| Rapid | Medium |
| Fast | |
| Fleet | Small |


---
### Traits

The maximum number of traits a vehicle can have depends on hull size and type.

Every vehicle has an inherent trait: the travel mode for which it was primarily designed. Therefore, aircraft inherently hold the Airborne trait, boats the Seaborne trait, and so on., This inherent trait does not count towards the available number of traits. However, if a vehicle wishes to include a second travel mode — a flying submarine for instance, then the Airborne trait would need to be taken as part of its available traits.

Some traits may not be available, depending on the technology level of the setting; Games Masters must make their own judgment calls as to what traits can be applied.

##### Vehicle Trait Allocation Table 

| Size | Max Traits |
| :-- | :-: |
| Small | 1 |
| Medium | 2 |
| Large | 3 |
| Huge | 4 |
| Enormous | 5 |
| Colossal | 6 |

#### Airborne

The vehicle is capable of atmospheric flight.

#### All Terrain

This Trait must be used with Ground vehicles. The vehicle can traverse inhospitable, difficult, and steep terrain, using either tracks, advanced suspension and drive systems, or powerful drive differentials.

#### Burrowing

The vehicle is designed to burrow and tunnel through the ground. It can achieve a maximum depth equal to its Hull Rating x5 metres.

#### Camouflaged

The vehicle possesses either camouflage paint or mimetic sensors that allow it to blend in with its environment. Attempts to spot the vehicle visually are one grade more difficult.

#### Cargo

The vehicle is designed specifically to haul cargo rather than passengers. Passenger compartments are kept to a minimum with the rest of the vehicle's usable space being devoted to cargo containment with appropriate sections, tools, and even environmental conditioning (such as freezer sections for transporting perishables). When laden with cargo the vehicle's speed is two steps lower than its hull size would ordinarily allow.

#### Carrier

The vehicle is designed specifically to carry smaller, lightly crewed, or possibly remotely controlled vehicles of either a civilian or military nature. Any vehicle possessing this trait must be at least Enormous. The number of small craft carried may vary by mission type and purpose but can be as few as 10 to as many as the vehicle's Structure rating.

#### Construction

The vehicle is equipped for heavy construction work. All vehicles with this trait have the All Terrain trait too, but speed is two steps lower than their hull size would ordinarily allow. The vehicle is fitted with task-appropriate tools such as crane jibs, digger shovels, dump carts and so on.

#### EMP Resistant

The vehicle is shielded against electromagnetic pulse attacks.

#### Enhanced Performance

The vehicle's Speed rating is one step higher than the maximum for its size.

#### Ejector Seat

In case of an emergency, an ejector seat propels occupants several hundred metres in the air, then deploys a parachute to allow a safe landing. Parachute is optional. Not recommended for helicopters (the Kamov Ka-52 Alligator being a notable exception).

#### FTL

Spacecraft Only. The craft is fitted with a faster than light engine (be this a hyperdrive, warp drive, wormhole generator or similar). The FTL drive has a separate Speed rating which essentially measures the rate at which a starship can cross a single parsec (3.26 light-years, or 31 trillion kilometres or 19 trillion miles), as follows:

##### FTL Speed Rating Table 

| Speed Rating | Factor to Traverse 1 Parsec |
| :-- | :-: |
| Ponderous | 10 |
| Sluggish | 8 |
| Slow | 7 |
| Mediocre | 6 |
| Gentle | 5 |
| Moderate | 4 |
| Rapid | 3 |
| Fast | 2 |
| Fleet | 1 |

The factor time is for the Games Master to decide, depending on how advanced the setting's FTL development is. For example, the base factor might be 1 Day, meaning that a ship with a Ponderous FTL drive takes 10 days to complete the journey, whereas a vessel with a Fleet FTL drive completes the trip in 1 day. Elsewhere, where FTL technology is significantly less efficient, then the factor time might be measured in months, rather than days.

It is assumed that the ship has fuel reserves to either make a return journey, or a means to refuel at the destination point.

Assume that any size of starship can be fitted with an FTL drive, although, again, this depends on the setting.

FTL drives cannot be activated within 1.5 Astronomical Units of a star (around 225 million kilometres, or 270 million miles). This means ships must use a sublight drive to move to about the distance of Mars before activating the FTL system.

#### Ground Vehicle

The vehicle is capable of ground travel.

#### Hover

The vehicle hovers above the ground either using an air cushion or an anti-gravity repulsor.

#### Luxurious

The vehicle is designed specifically to carry passengers at a certain level of luxury. Excess cargo space is given over to luxurious passenger accommodations, swimming pools, hot tubs, extra crew to cater to the whims of the passengers, and so forth.

#### Rails

The vehicle relies on a rail system. Vehicles with this trait can naturally achieve a Speed rating three steps higher than their hull size would ordinarily allow, but are obviously restricted to movement on the rail system only.

#### Resilient

All systems can withstand one additional hit more than normally determined by Size. This Trait can be stacked — so Resilient 2 indicates that systems can withstand 2 hits more than usual at a cost of two Trait points.

#### Seaborne

The vehicle is buoyant on water.

#### Spacecraft

The vehicle is sealed against vacuum and shielded against cosmic radiation and may, depending on design, be capable of leaving and re-entering atmosphere, and sustaining flight within an atmosphere.

#### Stealth

Aircraft Only. The vehicle is designed to avoid detection by radar and other long-range sensor systems. Attempts to spot the vehicle using electronic sensors are one grade more difficult.

#### Submersible

The vehicle is capable of submersing beneath the surface of an ocean to an operating depth of its Hull Rating x10 metres. The collapse depth — the absolute maximum the submersible can reach without being crushed — is 1.5 times its operating depth.

#### Superior Handling

The vehicle's handling is rated as Easy.

#### Surveillance Suite

The vehicle has an onboard computer, comms base station, receiver for listening device signals, and apparatus to intercept nearby smartphone signals within 100 metres.

#### Tough

A civilian vehicle with this trait draws its Hull from the Military column and automatically has the maximum Structure. A Military vehicle with this Trait draws its Hull and Structure from the next row down.

#### Tractor Beam

Spacecraft Only. The ship is fitted with a tractor beam that can ensnare and draw to it vehicles with a hull-rating of up to two steps less than its own. Thus, a Huge starship could attract and hold a hull of up to Medium size.

#### VTOL

Vertical takeoff/landing. This trait is inherent for helicopters and similar vehicles that use a combination of rotors to produce lift. When applied to fixed-wing aircraft it indicates the use of fixed or align-able thrusters to control airborne attitude, ascent, and descent.

#### Waterborne

The vehicle propels itself using articulated legs. Walker vehicles are capped at the Speed of Gentle, whatever their Size. However, Walkers can be built to heights that would simply be unstable for vehicles equipped with other means of locomotion.

This vehicle is capable of subaqua movement.

#### Weaponized

The vehicle has been adapted to accommodate weaponry. Weapon systems are discussed below in the [Weapons](0006_Vehicles.md?id=weapons) section.


---
## Weapons

Usually, only military hulls are designed to accommodate weaponry (hard points, ammunition storage, control systems). The 'Weaponized' Trait can be taken for civilian vehicles that may have weapon requirements.

The maximum number of weapon systems a vehicle can support is equal to 1/10th of its Structure Points (so a vehicle with 40 Structure could support 4 weapon systems, if a military vehicle, or a weaponized civilian vehicle).

Weapon systems depend on the Size of the vehicle. The maximum type of weapon system for different Sizes are shown in the tables in the tables below.


##### Weapons by Size Table 

| Size | Terrestrial | Spacecraft |
| :-- | :-- | :-- |
| Small | Light Weapon (e.g. Assault Rifle) | Medium Weapon (e.g. Machine Gun, Rocket Launcher) |
| Medium | Medium Weapon (e.g. Machine Gun, Rocket Launcher) | Turreted/Heavy Weapon (e.g. Heavy Linked Machine Guns, Mini-Guns) |
| Large | Turreted/Heavy Weapon (e.g. Heavy Linked Machine Guns, Mini-Guns) | Weapon Battery (e.g. Battlefield Artillery) |
| Huge | Weapon Battery (e.g. Battlefield Artillery) | Advanced Weapons (e.g. Missile Systems) |
| Enormous | Advanced Weapons (e.g. Missile Systems) | Spinal Mounted Weapons (one only) |
| Colossal | NA | Spinal Mounted Weapons (up to 3) |

##### Sample Weapon Statistics 
 
| Weapon | Damage | Range | Firing Rate | Ammo/Load |
| :-- | :-: | :-: | :-: | :-: |
| 50 inch Cannon | 3d6+3 | 1000/2000/6500 | 1/10/50 | 1/5 |
| Mini-Gun/Gatling Gun | 3d6 | 300/1000/2000 | -/20/100 | 200/4 |
| Rocket | 5d6 | 5000/20km/60km | 1 | 1/5 |
| Medium Missile/Torpedo | 6d10 | Max range of 200km | 1 | 1/5 |
| Large/Cruise Missile | 6d10+10 | Max range of 1000km | 1 | 1/10 |
| Laser/Plasma Cannon | 4d6 | 300/1000/2000 | -/5/25 | 500/5 |
| Heavy Laser/Plasma Cannon | 5d6 | 1000/3000/6000 | -/5/25 | 300/5 |
| Artillery Battery | 5d6+6 | Max range of 50km | 1 | 1/5 |
| Spinal Mount Battery | 10d6+6 | Max range of 20000km | 1 | 1/10 |

_Ranges are given in metres and kilometres._

_Firing rates are for single shot, semi-auto, and full auto._

_Ammo is firing capability before needing to be reloaded. Load is the reload time in Combat Rounds, assuming a full crew is available._

---
## Handling and Maneuvers

Evasive or sudden maneuvers require a successful Drive/Pilot roll to ensure that the driver or pilot retains control of the vehicle. Most vehicles are designed and built to withstand occasional stresses and strains, but the Games Master may rule that a particular maneuver requires a roll at a higher grade of difficulty, depending on how ambitious it is. Failure means that control over the vehicle is lost: roll on the Loss of Control table.

Note that the Loss of Control Table only applies to terrestrial vehicles. Similar effects can be applied to airborne and space vehicles, but Games Masters will need to adjust the reasoning for the specific effect. For example, an aircraft, rather than skidding, might go into a spin.

Also, a vehicle's inherent handling may have an additional impact on the Drive roll. Handling is either Easy, Standard, Hard, Formidable or Herculean and determines the starting point for the Drive roll when executing a maneuver. The difficulty grade for the maneuver is then applied to the handling to determine the final difficulty.

For example, a high-performance motorcycle has in-built gyrostabilizers giving it a Handling of Easy. The driver wants to perform a 180 degree skid-turn to evade a pursuer, a maneuver the Games Master rates as being one additional grade of difficulty. The rider must therefore make his Drive roll at Standard rather than Easy. If he had been attempting the same maneuver on a non-stabilized motorcycle, the Drive roll would be at Hard.

Superior Handling is a Trait. If a vehicle does not have the trait as part of its description, then the default is Standard handling for any vehicle of size Large and below. Huge and Enormous vehicles inherently have the Handling trait of Formidable and Herculean, respectively, and the Games Master is at liberty to rule that certain manoeuvres are simply impossible to achieve due to the vehicle's size.

##### Loss of Control Table 

| 1d100 | Result |
| :-: | :-- |
| 01-25 | Swerve. The loss of control is temporary. Vehicle drops its speed by 1 step for 5 seconds. |
| 26-40 | Skid. Driver must fight to keep the vehicle under control. Vehicle drops its speed by 2 steps for 10 seconds. |
| 41-50 | Severe Skid. Vehicle ends-up facing in the wrong direction and at a standstill for 15 seconds. |
| 51-60 | Roll. Vehicle skids and rolls, sustaining 3d10 damage to its Structure. Occupants must make successful Endurance rolls or sustain 1d10 damage to 1d3 Hit Locations. |
| 61-70 | Severe Roll. As above, but vehicle sustains 3d10+10 damage and Occupants receive 1d10 damage even if the Endurance roll succeeds, and 2d10 if it fails. |
| 71-80 | Write-Off. As above but the vehicle is reduced to 0 Structure. Occupants sustain same damage as for Severe Roll. |
| 81-90 | Explosion. As above but vehicle's fuel system ignites and explodes within 1d20+10 seconds. If unable to get clear, occupants suffer a further 1d6 burn damage to 1d6 locations |
| 91-98 | Immediate Explosion. As above but the explosion is immediate. |
| 99-00 | Catastrophic Crash. Occupants must successfully roll Endurance or be killed instantly. Damage as for Write-Off is sustained regardless. |

---
## Sample Vehicles

---

### Ground Vehicles

#### Interceptor

A souped-up luxury car, sports car or similar, this car is built to go fast and give as good as it takes in a battle. This is the sort of vehicle people think of when someone says, "spy car."

| Interceptor | |
| :- | :- |
| **Size / Type** | Medium Military |
| **Hull** | 6 |
| **Structure** | 40 |
| **Speed** | Fast |
| **Systems** | 3 |
| **Traits** | [Ejector Seat](0006_Vehicles.md?id=ejector-seat), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Weapons** | Oil slick dispenser, smoke dispenser, twin linked medium machine guns |

<br>

---

#### Pursuit Motorcycle

A lightweight, fast motorcycle for fast pursuits, the Pursuit Motorcycle carries a surprise – either a pair of linked machine guns or two rockets.

| Pursuit Motorcycle | |
| :- | :- |
| **Size / Type** | Small Civilian |
| **Hull** | 2 |
| **Structure** | 12 |
| **Speed** | Fast |
| **Systems** | 3 |
| **Traits** | [Superior Handling](0006_Vehicles.md?id=superior-handling), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Weapons** | Two Rockets or twin linked Light Machine Guns |

<br>

---

#### Sedan Car

A standard 4-door sedan featuring enough space to comfortably seat a driver and three passengers. Sacrifices cargo space to incorporate a surveillance suite.

| Sedan Car | |
| :- | :- |
| **Size / Type** | Medium Civilian |
| **Hull** | 4 |
| **Structure** | 25 |
| **Speed** | Rapid |
| **Systems** | 3 |
| **Traits** | [Unobtrusive](0006_Vehicles.md?id=unobtrusive), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite) |
| **Weapons** | None |

<br>

---

#### Submersible Car

A two-person car that can switch to waterborne or submersible mode to travel on or underwater. Comes with a front-mounted torpedo and top-mounted surface-to-air missile.

| Submersible Car | |
| :- | :- |
| **Size / Type** | Medium Civilian |
| **Hull** | 6 |
| **Structure** | 25 |
| **Speed** | Fast |
| **Systems** | 3 |
| **Traits** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Submersible](0006_Vehicles.md?id=submersible), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Weapons** | Rocket, Torpedo |

<br>

---

#### Surveillance Van

A plain, unmarked van housing a team of agents and a suite of audio-visual recording equipment.

| Surveillance Van | |
| :- | :- |
| **Size / Type** | Large Civilian |
| **Hull** | 9 |
| **Structure** | 60 |
| **Speed** | Gentle |
| **Systems** | 4 |
| **Traits** | [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Tough](0006_Vehicles.md?id=tough) |
| **Weapons** | None |

<br>

---

#### Tactical Support Vehicle

A pickup or jeep with room for a two-person crew in the cabin and a gunner standing in the flatbed section operating a swivel-mounted Medium Machine Gun.

| Tactical Support Vehicle | |
| :- | :- |
| **Size / Type** | Medium Civilian |
| **Hull** | 6 |
| **Structure** | 30 |
| **Speed** | Rapid |
| **Systems** | 3 |
| **Traits** | [All Terrain](0006_Vehicles.md?id=all-terrain), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Weapons** | Mounted Medium Machine Gun |


<br>

---

### Watercraft

#### Speedboat

A typical speedboat, armed with a rear-mounted mine dispenser.

| Speedboat | |
| :- | :- |
| **Size / Type** | Medium Civilian |
| **Hull** | 3 |
| **Structure** | 24 |
| **Speed** | Fast |
| **Systems** | 3 |
| **Traits** | [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Waterborne](0006_Vehicles.md?id=waterborne), [Weaponized](0006_Vehicles.md?id=weaponized) |
| **Weapons** | Mine Dispenser |

<br>

---

#### Yacht

The kind of luxury yacht an oligarch might own. Likely kitted out with a surveillance suite to protect against enemies attempting to get up to no good.

| Yacht | |
| :- | :- |
| **Size / Type** | Huge Civilian |
| **Hull** | 10 |
| **Structure** | 75 |
| **Speed** | Slow |
| **Systems** | 4 |
| **Traits** | [Luxurious](0006_Vehicles.md?id=luxurious), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [Waterborne](0006_Vehicles.md?id=waterborne) |
| **Weapons** | None |


<br>

---

### Aircraft/Spacecraft

#### Dirigible (Civilian Airship Liner)

Similar to the Hindenburg, this class of transcontinental dirigible (and others of its class) is 245 meters in length and requires a crew of 40 to 61. It can typically carry a complement of 50 to 72 passengers in luxury accommodations.

| Dirigible | |
| :- | :- |
| **Size / Type** | Enormous Civilian |
| **Hull** | 10 |
| **Structure** | 85 |
| **Speed** | Ponderous |
| **Systems** | 5 |
| **Traits** | [Airborne](0006_Vehicles.md?id=airborne), [Luxurious](0006_Vehicles.md?id=luxurious), [VTOL](0006_Vehicles.md?id=vtol) |
| **Shields** | None |
| **Weapons** | None |

<br>

---

#### Assault Helicopter

The traditional Assault Helicopter uses their advanced surveillance technology to intercept phone and wireless internet signals, and track individuals and vehicles even in the dark, through FLIR. Attempts to evade the tracker through Stealth are Formidable.

| Assault Helicopter | |
| :- | :- |
| **Size / Type** | Large Military |
| **Hull** | 11 |
| **Structure** | 50 |
| **Speed** | Mediocre |
| **Systems** | 3 |
| **Traits** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance), [Stealth](0006_Vehicles.md?id=stealth), [Superior Handling](0006_Vehicles.md?id=superior-handling), [Surveillance Suite](0006_Vehicles.md?id=surveillance-suite), [VTOL](0006_Vehicles.md?id=vtol) |
| **Shields** | None |
| **Weapons** | 1 Gatling gun, 4 rockets |

<br>

---

#### Multi-Role Fighter

This twin-seat land-based fighter (similar in type to the De Havilland Mosquito) is well known for its performance and versatility. Its bomb bay is able to carry either two 250 lb. bombs (treat as medium missiles with range 0) or a single torpedo.

| Multi-Role Fighter | |
| :- | :- |
| **Size / Type** | Large Military |
| **Hull** | 10 |
| **Structure** | 45 |
| **Speed** | Mediocre |
| **Systems** | 3 |
| **Traits** | [Airborne](0006_Vehicles.md?id=airborne), [Enhanced Performance](0006_Vehicles.md?id=enhanced-performance) |
| **Shields** | None |
| **Weapons** | 4 nose-mounted Gatling guns (fore), 1 bomb bay (see description) |

<br>

---

#### Interstellar Freighter (Light High-Tech Transport)

This light transport requires a minimum crew of only two, with room for up to four additional passengers. The standard stock version is noted here, however many owners will apply their own "special modifications" such as concealed cargo space, Enhanced Performance, Superior Handling, EMP Resistance, Stealth, and so on.

| Interstellar Freighter | |
| :- | :- |
| **Size / Type** | Medium Civilian Spaceship |
| **Hull** | 10 |
| **Structure** | 80 |
| **Speed** | Rapid (Parsec Factor of 3) |
| **Systems** | 2 |
| **Traits** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [FTL](0006_Vehicles.md?id=ftl), [Space Craft](0006_Vehicles.md?id=space-craft),[VTOL](0006_Vehicles.md?id=vtol) |
| **Shields** | 8 |
| **Weapons** | x2 quad-mounted laser cannon turrets |


<br>

---

#### General Contact Unit (Ultra High-Tech Spacecraft)

This extremely high-tech starship is the physical representation of a highly advanced artificial Mind, that takes the form of a two-kilometre-long series of field-connected modules. The modules are individually purposed and include habitats, construction facilities, cargo areas, food processing, leisure complexes, hangar bays, and even some secretive units the ship's intelligence rarely, if ever, discusses. It needs no human crew, but can support a passenger population of up to 100,000 with ease. Many passengers are born and die aboard the Contact Unit: many are transitory, coming and going as they wish.

| General Contact Unit | |
| :- | :- |
| **Size / Type** | Colossal Civilian Spaceship |
| **Hull** | 20 |
| **Structure** | 10,000 |
| **Speed** | Moderate (Parsec Factor of 4. At this tech level, a Factor equals 1 hour) |
| **Systems** | 30 |
| **Traits** | [Airborne](0006_Vehicles.md?id=airborne), [Cargo](0006_Vehicles.md?id=cargo), [Carrier](0006_Vehicles.md?id=carrier), [Construction](0006_Vehicles.md?id=construction), [FTL](0006_Vehicles.md?id=ftl), [Luxurious](0006_Vehicles.md?id=luxurious), [Space Craft](0006_Vehicles.md?id=space-craft),[Superior Handling](0006_Vehicles.md?id=superior-handling), [Tractor Beam](0006_Vehicles.md?id=tractor-beam) |
| **Shields** | 30 |
| **Weapons** | None that it cares to discuss |

<br>

