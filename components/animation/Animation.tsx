import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import lottie from 'lottie-web';

type AnimationProps = {
  animationData: any,
  size?: number,
  style?: object,
  autoplay?: boolean,
  autoloop?: boolean,
  loopOnHover?: boolean,
  playOnClickAndReverse?: boolean,
  playOnHoverAndReverse?: boolean,
  loopOnHoverAndFreeze?: boolean,
  onAnimationComplete?: () => void
  onAnimationLoopComplete?: () => void

}

const Animation = forwardRef((props: AnimationProps, parentExposedRef: any) => {
  const [lottieObj, setLottieObj] = useState<any>(null);
  const privateRef = useRef<HTMLDivElement>(null);
  const [playDirection, setPlayDirection] = useState<number>(-1);

  const {
    autoplay,
    autoloop,
    playOnClickAndReverse,
    animationData,
    loopOnHover,
    loopOnHoverAndFreeze,
    playOnHoverAndReverse,
    onAnimationComplete,
    onAnimationLoopComplete } = props;

  // Init of lottie object
  useEffect(() => {
    if (!privateRef.current) {
      return;
    }

    const shouldAutoplay = autoplay || autoloop;
    const shouldLoop = autoloop || loopOnHover || loopOnHoverAndFreeze;

    console.log('shouldLoop: ', shouldLoop)

    const lottieObj = lottie.loadAnimation({
      animationData: animationData,
      container: privateRef.current,
      loop: shouldLoop || false,
      autoplay: shouldAutoplay || false
    });

    lottieObj.addEventListener('complete', () => {
      onAnimationComplete && onAnimationComplete();
    });

    lottieObj.addEventListener('loopComplete', () => {
      onAnimationLoopComplete && onAnimationLoopComplete();
    })

    setLottieObj(lottieObj);

    return () => {
      lottieObj.destroy();
    }

  }, [privateRef, autoplay, autoloop, loopOnHover, animationData, loopOnHoverAndFreeze, onAnimationComplete, onAnimationLoopComplete]);


  // Handlers
  const handleClick = () => {
    if (playOnClickAndReverse) {
      lottieObj.play();
      lottieObj.setDirection(playDirection * -1);
      setPlayDirection(playDirection * -1);
    }
  }

  const handleMouseEnter = () => {
    console.log('hovered')
    if (loopOnHover || loopOnHoverAndFreeze) {
      return lottieObj.play();
    }

    if (playOnHoverAndReverse) {
      lottieObj.setDirection(1);
      lottieObj.play();
    }
  }

  const handleMouseLeave = () => {
    console.log('left')
    if (loopOnHover) {
      return lottieObj.stop();
    }

    if (loopOnHoverAndFreeze) {
      return lottieObj.pause();
    }

    if (playOnHoverAndReverse) {
      console.log('here')
      lottieObj.setDirection(-1);
      lottieObj.play();
    }
  }

  // Methods accessible to parent
  useImperativeHandle(parentExposedRef, () => ({
    play() {
      lottieObj.play();
    },
    pause() {
      lottieObj.pause();
    },
    stop() {
      lottieObj.stop();
    },
    resetAndPlay() {
      lottieObj.stop();
      lottieObj.play();
    }
  }));


  return (
    <div
      style={{ ...props.style, width: props.size + 'px', height: props.size + 'px' }}>
      <div
        ref={privateRef}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
    </div>
  );
});

export default Animation;
