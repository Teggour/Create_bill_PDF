import React, { useState, useEffect, useMemo } from "react";

function useIsInViewport(ref: React.RefObject<any>): boolean {
	const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

	const observer: IntersectionObserver = useMemo(
		() =>
			new IntersectionObserver(([entry]) =>
				setIsIntersecting(entry.isIntersecting)
			),
		[]
	);

	useEffect(() => {
		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref, observer]);

	return isIntersecting;
}

export default useIsInViewport;
