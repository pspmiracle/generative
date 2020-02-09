import createShader from 'canvas-sketch-util/shader';
import fragmentShader from './shaders/frag.glsl';

const settings = {
  context: 'webgl',
  animate: true,
};

const sketch = ({ gl, time }) => {
  return createShader({
    gl,
    frag: fragmentShader,
    uniforms: {
      iTime: ({ time }) => time,
      iResolution: ({ width, height }) => [width, height],
    },
  });
};

export default { sketch, settings };
