import { Extension } from "@codemirror/state";
import { BoxProps } from "@mantine/core";
import { editor } from "monaco-editor";

export interface CodeEditorProps extends BoxProps {
	value?: string;
	extensions?: Extension[];
	readOnly?: boolean;
	autoFocus?: boolean;
	onChange?: (value: string) => void;

	/** @deprecated monaco only */
	height?: number;
	/** @deprecated monaco only */
	autoSize?: boolean;
	/** @deprecated monaco only */
	language?: string;
	/** @deprecated monaco only */
	onMount?: (editor: editor.IStandaloneCodeEditor) => void;
	/** @deprecated monaco only */
	options?: editor.IStandaloneEditorConstructionOptions;
}