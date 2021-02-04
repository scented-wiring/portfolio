import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import $ from "jquery";

const FadeInWhenVisible = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

const SlideWhenVisible = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -200 },
      }}
    >
      {children}
    </motion.div>
  );
};

const RollInWhenVisible = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, x: 0, rotate: 360 },
        hidden: { opacity: 0, x: -200 },
      }}
    >
      {children}
    </motion.div>
  );
};

const AnimateLink = ({ children }) => {
  return (
    <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.div>
  );
};

const handleBeautify = (beautify, setBeautify) => {
  if (!beautify) {
    setBeautify(true);
    $("*:not(i)").css("font-family", "Times New Roman");
    $(document.body).addClass("beautify-body");
    $("#top").css({
      background: "yellow",
      color: "black",
    });
    $("#navbar").css({ background: "#4F2517", color: "white" });
    $(".box").css(
      "background",
      "linear-gradient(90deg, rgba(204,4,255,1) 0%, rgba(255,250,21,1) 35%, rgba(255,147,0,1) 75%)"
    );
    $("#contact-form").css("background", "yellow");
  } else {
    setBeautify(false);
    $("*:not(i)").css("font-family", "");
    $(document.body).removeClass("beautify-body");
    $("#top").css({ background: "", color: "" });
    $("#navbar").css({ background: "", color: "" });
    $(".box").css("background", "");
    $("#contact-form").css("background", "");
  }
};

export {
  FadeInWhenVisible,
  SlideWhenVisible,
  RollInWhenVisible,
  AnimateLink,
  handleBeautify,
};
