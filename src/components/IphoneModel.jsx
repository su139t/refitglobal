import { useGLTF } from "@react-three/drei";
import { forwardRef, useEffect } from "react";

const IphoneModel = forwardRef((props, ref) => {
  const { scene } = useGLTF("/3dmodel/iphone_12_pro.glb");

  useEffect(() => {
    const isDesktop = window.innerWidth > 768;
    const scale = isDesktop ? 0.015 : 0.01;

    scene.scale.set(scale, scale, scale);
    scene.position.set(0, -0.5, 0);
  }, [scene]);

  return <primitive object={scene} ref={ref} {...props} />;
});

export default IphoneModel;
