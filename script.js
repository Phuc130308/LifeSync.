function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }

  const elements = document.querySelectorAll('.fade-in, .fade-in-2');
  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

  elements.forEach(element => {
    observer.observe(element);
  });

  let lastObservedElements = elements;

  const scrollUpObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const isElementVisible = entry.isIntersecting;
      const element = entry.target;

      if (!isElementVisible) {
        element.classList.remove('show');
        observer.observe(element);
      }
    });
  }, { threshold: 0 });

  lastObservedElements.forEach(element => {
    scrollUpObserver.observe(element);
  });

//   Code from ChatGPT