import { lazy, Suspense } from "react";

const Component = (folder, name) => {
  return lazy(() =>
    import(`../${folder}/${name}`).then((module) => ({
      default: module[name],
    }))
  );
};

export function LazyComponent(props) {
  const NewComponent = Component(props.folder, props.name);

  return (
    <Suspense fallback="Загрузка компонента...">
      <NewComponent {...props} />
    </Suspense>
  );
}
