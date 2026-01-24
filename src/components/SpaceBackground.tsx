import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";

const SpaceBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadEmittersPlugin(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("particles.js loaded", container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
      particles: {
        // Starfield particles
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false
          }
        },
        size: {
          value: { min: 1, max: 3 }
        },
        move: {
          enable: true,
          speed: { min: 0.1, max: 1 },
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out"
          }
        },
        zIndex: {
            value: 1
        }
      },
      // Planet particles
      groups: {
        planets: {
          number: {
            value: 10,
          },
          color: {
            value: ["#FFD700", "#FF6347", "#4682B4", "#32CD32"]
          },
          opacity: {
            value: { min: 0.3, max: 0.7 }
          },
          size: {
            value: { min: 50, max: 100 },
            animation: {
                enable: true,
                speed: 5,
                sync: false,
            }
          },
          move: {
            enable: true,
            speed: { min: 0.5, max: 1.5 },
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out"
            },
            trail: {
              enable: false,
            }
          },
          zIndex: {
            value: 0
          }
        }
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: false,
          },
          resize: {
            enable: true
          }
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 z-0"
      />
    );
  }

  return null;
};

export default SpaceBackground; 