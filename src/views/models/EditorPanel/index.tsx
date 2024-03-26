import classes from "./style.module.scss";
import { Center, Divider, Group, Text } from "@mantine/core";
import { ActionIcon, CopyButton, Paper, Stack, Textarea } from "@mantine/core";
import { mdiFunction } from "@mdi/js";
import { Updater } from "use-immer";
import { Icon } from "~/components/Icon";
import { PermissionInput } from "~/components/Inputs";
import { ContentPane } from "~/components/Pane";
import { SaveBox } from "~/components/SaveBox";
import { Spacer } from "~/components/Spacer";
import { SaveableHandle } from "~/hooks/save";
import { ModelDefinition } from "~/types";
import { iconCheck, iconCopy } from "~/util/icons";

export interface EditorPanelProps {
	handle: SaveableHandle;
	details: ModelDefinition;
	onChange: Updater<ModelDefinition>;
}

export function EditorPanel({
	handle,
	details,
	onChange,
}: EditorPanelProps) {

	const fullName = `ml::${details.name}()`;

	return (
		<ContentPane
			title="Function Editor"
			icon={mdiFunction}
		>
			<Group
				h="100%"
				align="stretch"
				gap="xl"
			>
				<Stack
					gap="lg"
					mt="xs"
					w={400}
					style={{ flexShrink: 0 }}
				>
					<Paper
						style={{ alignItems: "center" }}
						display="flex"
						bg="slate.9"
						p="lg"
					>
						<Text
							fz={15}
							c="surreal"
							ff="mono"
						>
							ml::
						</Text>
						<Text
							fz={15}
							c="bright"
							ff="mono"
						>
							{details.name}()
						</Text>
						<Spacer />
						<CopyButton value={fullName}>
							{({ copied, copy }) => (
								<ActionIcon
									variant={copied ? 'gradient' : undefined}
									onClick={copy}
								>
									<Icon path={copied ? iconCheck : iconCopy} />
								</ActionIcon>
							)}
						</CopyButton>
					</Paper>
					<Divider />
					<PermissionInput
						label="Permission"
						value={details.permission}
						onChange={value => onChange((draft) => {
							draft.permission = value;
						})}
					/>
					<Textarea
						rows={5}
						label="Comment"
						description="Optional description for this function"
						placeholder="Enter comment..."
						value={details.comment}
						onChange={value => onChange((draft) => {
							draft.comment = value.target.value;
						})}
					/>
					<Spacer />
					<SaveBox
						handle={handle}
						inline
						inlineProps={{
							className: classes.saveBox
						}}
					/>
				</Stack>
				<Divider
					orientation="vertical"
				/>
				<Center flex={1}>
					<Text c="slate">
						TODO
					</Text>
				</Center>
			</Group>
		</ContentPane>
	);
}